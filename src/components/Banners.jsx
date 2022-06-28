import ejercice from "../assets/images/ejercicehome.png";
import { BannersDiv, BannersItem } from "../styles/BannerStyles";
export const Banners = () => {
  return (
    <>
      <BannersDiv>
        <BannersItem>
          <div>
            <div>
              <h2>Warm up</h2>
              <p>Before training, be sure to warm up, give it 5 - 10 minutes</p>
            </div>
            <img src={ejercice} />
          </div>
        </BannersItem>
        <BannersItem>
          <div>
            <div>
              <h2>Warm up</h2>
              <p>Before training, be sure to warm up, give it 5 - 10 minutes</p>
            </div>
            <img src={ejercice} />
          </div>
        </BannersItem>
        <BannersItem>
          <div>
            <div>
              <h2>Warm up</h2>
              <p>Before training, be sure to warm up, give it 5 - 10 minutes</p>
            </div>
            <img src={ejercice} />
          </div>
        </BannersItem>
        <BannersItem>
          <div>
            <div>
              <h2>Warm up</h2>
              <p>Before training, be sure to warm up, give it 5 - 10 minutes</p>
            </div>
            <img src={ejercice} />
          </div>
        </BannersItem>
      </BannersDiv>
    </>
  );
};
