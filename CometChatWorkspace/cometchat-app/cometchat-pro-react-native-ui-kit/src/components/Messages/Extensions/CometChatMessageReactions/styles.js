import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  replyTextStyle: {
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 12,
    textTransform: 'lowercase',
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  reactionDetailBottomSheet: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)' },
  reactionContainer: {
    borderRadius: 12,
    width: 40,
    height: 25,
    marginLeft: 5,
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'rgba(0,100,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,

    backgroundColor: '#fff',
    margin: 2,
  },
  sectionItemNameText: { fontSize: 18 },
  addReactionImage: { width: 16, height: 16, resizeMode: 'contain' },
  modalPickerStyle: { borderRadius: 20, overflow: 'hidden' },
  emojiContainer: { marginTop: 11 },
  reactionText: { fontSize: 12, fontWeight: '500' },
  reactionDetailsContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 20,
    minHeight: Dimensions.get('window').height + 200,
  },
  reactionDetailsHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: Dimensions.get('window').width / 2 - 55,
    paddingRight: 16,
    marginBottom: 20,
  },
  reactionDetailsHeaderText: {
    fontSize: 22,
  },
  reactionDetailsHeaderCloseText: {
    fontSize: 20,
    color: 'rgba(0,150,255,1)',
  },
  sectionHeaderContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  sectionItemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionItemAvatar: {
    height: 45,
    width: 45,
    marginRight: 15,
    borderRadius: 22.5,
  },
  sectionItemName: {
    flex: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
});
