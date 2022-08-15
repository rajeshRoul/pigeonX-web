import DefaultHeader from "components/AppCommon/Headers/DefaultHeader";
import LayoutHorizontalSplit from "layouts/LayoutHorizontalSplit";

const HomePage = () => {
  return (
    <LayoutHorizontalSplit header={<DefaultHeader />}>
      <div
        style={{ backgroundColor: "blue", height: 200, width: "100%" }}
      ></div>
    </LayoutHorizontalSplit>
  );
};

export default HomePage;
