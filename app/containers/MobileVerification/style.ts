import { hp, wp } from '@/app/helper/responsiveScreen';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backIcon: {
    fontSize: 24,
    color: '#333',
    marginRight: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
    marginTop: 32,
  },
  verificationText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 8,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 16,
  },
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
  timer: {
    fontSize: 16,
    color: '#333',
    marginTop: 16,
  },
  resendText: {
    fontSize: 14,
    color: '#1E90FF',
    marginTop: 8,
  },
  btn: {
    width: wp(90),
    marginTop: hp(6),
    borderRadius: hp(5),
  },
});