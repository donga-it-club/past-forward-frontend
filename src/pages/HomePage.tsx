import Home from '@/../public/Home.png';

const HomePage = () => {
  return (
    <>
      <img src={Home} useMap="#GetStartedForFree" />
      <map name="GetStartedForFree">
        <area shape="rect" title="새창 열기" coords="814,635,1295,692" href="#" />
      </map>
    </>
  );
};

export default HomePage;
