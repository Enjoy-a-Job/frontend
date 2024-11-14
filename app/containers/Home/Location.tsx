import * as React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import * as ExpoLocation from 'expo-location';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

import { useDisplayAlert } from '@/app/contexts/DisplayAlert';
import colors from '../../assets/colors';
import { normalize } from '../../helper/responsiveScreen';
import SvgIcons from '../../assets/svgIcons';
import { FontText } from '../../components';
import styles from './style';

import { registerAddress, RegisterAddressBody } from '@/api/user';

const Location = (): React.ReactElement => {
  const [location, setLocation] = React.useState<{ latitude: number; longitude: number } | null>(null);
  const [address, setAddress] = React.useState<{
    name: string;
    street: string;
    city: string;
    region: string;
    country: string;
  } | null>(null);
  const { displayAlert } = useDisplayAlert();
  const { t } = useTranslation();
  const { mutate: doRequest, status } = useMutation({
    mutationFn: (body: RegisterAddressBody) => registerAddress(body),
    onSuccess: (data: unknown) => {
      console.log('data', data);
    },
    onError: ({ response }: AxiosError) => {
      displayAlert({ type: 'danger', message:  t(`app.location.status-${response?.status}`) });
    },
  });
  const getLocation = async () => {
    // Request location permissions
    let { status } = await ExpoLocation.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      displayAlert({ type: 'danger', message: t('app.location.permission-denied') });
      return;
    }

    // Get current location
    let location = await ExpoLocation.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    setLocation({ latitude, longitude });

    // Perform reverse geocoding to get address
    let [addressInfo] = await ExpoLocation.reverseGeocodeAsync({ latitude, longitude });
    setAddress({
      name: addressInfo?.name || '',
      street: addressInfo?.street || '',
      city: addressInfo?.city || '',
      region: addressInfo?.region || '',
      country: addressInfo?.country || '',
    });
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.locationContainer}>
      <SvgIcons.Location />
      <FontText
        name={'inter-semibold'}
        size={normalize(16)}
        style={styles.loactionText}
        color={colors.black}>
        {`${address?.name}, ${address?.street}, ${address?.city}, ${address?.region}, ${address?.country}`}
      </FontText>
      <SvgIcons.Map />
    </View>
  );
};

export default Location;