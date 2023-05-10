import styles from './detail.module.css'

const CoupleTree = () => {
  return (
    <div className={styles.container}>
      <h2>파일 구조</h2>
      <p>
        client<br/>
        │───public<br/>
        │   └───index.html<br/>
        │───src<br/>
        │   │───components<br/>
        │   │   │───anniversary<br/>
        │   │   │   │───Anniversary.jsx<br/>
        │   │   │   │───AnniversaryCard.jsx<br/>
        │   │   │   │───AddAnniversary.jsx<br/>
        │   │   │   │───AddFirstMeet.jsx<br/>
        │   │   │   │───AddAdditionalAnniversary.jsx<br/>
        │   │   │   └───EditAnniversary.jsx<br/>
        │   │   │───calnedar<br/>
        │   │   │   └───Calendar.jsx<br/>
        │   │   │───couple<br/>
        │   │   │   │───Couple.jsx<br/>
        │   │   │   │───CoupleInfo.jsx<br/>
        │   │   │   │───CoupleRegister.jsx<br/>
        │   │   │   │───CoupleDisconnect.jsx<br/>
        │   │   │   └───DisconnenctModal.jsx<br/>
        │   │   │───home<br/>
        │   │   │   │───Home.jsx<br/>
        │   │   │   │───Banner.jsx<br/>
        │   │   │   │───MyLink.jsx<br/>
        │   │   │   │───NavCard.jsx<br/>
        │   │   │   │───ScheduleLink.jsx<br/>
        │   │   │   │───LetterLink.jsx<br/>
        │   │   │   └───AnniversaryLink.jsx<br/>
        │   │   │───letter<br/>
        │   │   │   │───LetterList.jsx<br/>
        │   │   │   │───LetterCard.jsx<br/>
        │   │   │   │───LetterView.jsx<br/>
        │   │   │   └───AddLetter.jsx<br/>
        │   │   │───login<br/>
        │   │   │   │───Login.jsx<br/>
        │   │   │   └───Logout.jsx<br/>
        │   │   │───memory<br/>
        │   │   │   │───photo<br/>
        │   │   │   │   │───Photos.jsx<br/>
        │   │   │   │   │───PhotoCard.jsx<br/>
        │   │   │   │   │───PhotoModal.jsx<br/>
        │   │   │   │   └───PhotoUploadModal.jsx<br/>
        │   │   │   │───Memories.jsx<br/>
        │   │   │   │───MemoryCard.jsx<br/>
        │   │   │   │───MemoryHeader.jsx<br/>
        │   │   │   │───MemoryView.jsx<br/>
        │   │   │   │───AddMemory.jsx<br/>
        │   │   │   └───EditMemory.jsx<br/>
        │   │   │───schedule<br/>
        │   │   │   │───ScheduleList.jsx<br/>
        │   │   │   │───Schedule.jsx<br/>
        │   │   │   │───CalendarSchedule.jsx<br/>
        │   │   │   │───DailyScheduleSchedule.jsx<br/>
        │   │   │   │───ScheduleCard.jsx<br/>
        │   │   │   │───AddSchedule.jsx<br/>
        │   │   │   └───EditSchedule.jsx<br/>
        │   │   │───sahred<br/>
        │   │   │   │───button<br/>
        │   │   │   │   │───MainButton.jsx<br/>
        │   │   │   │   │───CancelButton.jsx<br/>
        │   │   │   │   └───LinkButton.jsx<br/>
        │   │   │   │───modal<br/>
        │   │   │   │   │───Backdrop.jsx<br/>
        │   │   │   │   │───ModalContainer.jsx<br/>
        │   │   │   │   └───Modal.jsx<br/>
        │   │   │   │───Header.jsx<br/>
        │   │   │   │───Title.jsx<br/>
        │   │   │   │───NavBar.jsx<br/>
        │   │   │   └───Loading.jsx<br/>
        │   │   └───user<br/>
        │   │       │───MyPageLink.jsx<br/>
        │   │       └───User.jsx<br/>
        │   │───pages<br/>
        │   │   │───HomePage.jsx<br/>
        │   │   │───RequireLoginPage.jsx<br/>
        │   │   │───MemoryPage.jsx<br/>
        │   │   │───LetterPage.jsx<br/>
        │   │   │───AnniversaryPage.jsx<br/>
        │   │   │───MyPage.jsx<br/>
        │   │   └───AddMemoryPage.jsx<br/>
        │   │───hooks<br/>
        │   │   │───useToggle.jsx<br/>
        │   │   └───useLoginMaintenance.jsx<br/>
        │   │───modules<br/>
        │   │   │───letterSlice.js<br/>
        │   │   │───modalSlice.js<br/>
        │   │   └───loginSlice.js<br/>
        │   │───styles<br/>
        │   │   └───reset.css<br/>
        │   │   └───fonts.css<br/>
        │   │───App.css<br/>
        │   │───App.js<br/>
        │   │───index.css<br/>
        │   │───index.js<br/>
        │   │───store.js<br/>
        │   └───common.js<br/>
        │───.env<br/>
        └───package.json<br/><br/>

        server<br/>
        │───api<br/>
        │   │───controllers<br/>
        │   │   │───coupleController<br/>
        │   │   │   │───index.js<br/>
        │   │   │   │───requestCouple.js<br/>
        │   │   │   │───registCouple.js<br/>
        │   │   │   │───uploadProfileToS3.js<br/>
        │   │   │   └───disconnectCouple.js<br/>
        │   │   │───authController<br/>
        │   │   │   │───index.js<br/>
        │   │   │   │───kakao.js<br/>
        │   │   │   │───kakaoLgoin.js<br/>
        │   │   │   └───checkLogin.js<br/>
        │   │   │───letterController<br/>
        │   │   │   └───index.js<br/>
        │   │   │───userController<br/>
        │   │   │   │───index.js<br/>
        │   │   │   └───requestUser.js<br/>
        │   │   │───anniversaryController<br/>
        │   │   │   └───index.js<br/>
        │   │   │───scheduleController<br/>
        │   │   │   └───index.js<br/>
        │   │   │───memoryController<br/>
        │   │   │   │───index.js<br/>
        │   │   │   │───requestMemory.js<br/>
        │   │   │   │───postMemoryByAdd.js<br/>
        │   │   │   │───editMemoryById.js<br/>
        │   │   │   └───uploadMemoryToS3.js<br/>
        │   │───routes<br/>
        │   │   │───authRoutes.js<br/>
        │   │   │───coupleRoutes.js<br/>
        │   │   │───anniversaryRoutes.js<br/>
        │   │   │───scheduleRoutes.js<br/>
        │   │   │───letterRoutes.js<br/>
        │   │   │───memoryRoutes.js<br/>
        │   │   └───userRoutes.js<br/>
        │───config<br/>
        │   │───db.js<br/>
        │   └───aws.js<br/>
        │───server.js<br/>
        │───common.js<br/>
        │───.env<br/>
        └───package.json<br/>
      </p>
    </div>
  );
};

export default CoupleTree;
