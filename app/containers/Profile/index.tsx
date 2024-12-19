import { View, TouchableOpacity } from "react-native";
import React from "react";
import SvgIcons from "../../assets/svgIcons";
import s from "./style";
import { useTranslation } from "react-i18next";
import { FontText } from "@/app/components";
import colors from "@/app/assets/colors";
import { hp, normalize } from "@/app/helper/responsiveScreen";
import ProfileMenuList from "@/app/components/ProfileMenuList";
import { PROFILE_MENU_DATA } from "@/app/helper/constantData";

const Profile = ({ navigation }: any) => {
  const { t } = useTranslation();
  const [menu, setMenu] = React.useState<any>([]);

  const menuData = PROFILE_MENU_DATA();

  React.useLayoutEffect(() => {
    setMenu(menuData);
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: t("profile"),
      headerTitleStyle: s.headerTitle,
      headerLeft: () => (
        <TouchableOpacity
          style={s.backIcon}
          onPress={() => navigation.goBack()}
        >
          <SvgIcons.BackIcon />
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  return (
    <View style={s.container}>
      <View style={s.profileView}>
        <View>
          <SvgIcons.ProfileIcon />
        </View>
        <TouchableOpacity style={s.cameraView}>
          <SvgIcons.Camera />
        </TouchableOpacity>
      </View>
      <View style={s.subContainer}>
        <View style={s.titleEmailView}>
          <FontText
            size={normalize(24)}
            color={colors.black}
            style={s.titleText}
            pTop={hp(4)}
          >
            {t("profile.Title")}
          </FontText>
          <FontText
            size={normalize(16)}
            color={colors.gray}
            style={s.emailText}
            pTop={hp(1)}
            textDecorationLine='none'
          >
            {t("profile.Email")}
          </FontText>
        </View>
        <View style={s.flatView}>
          <ProfileMenuList data={menu} />
        </View>
      </View>
    </View>
  );
};

export default Profile;
