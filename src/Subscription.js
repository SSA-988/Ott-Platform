import React ,{useState} from "react";
import "./Subscription.css";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import { useHistory } from "react-router";
import VipPackage from "./VipPackage";
import PremiumPackage from "./PremiumPackage";

function Subscription() {
  const [open,setOpen] = useState(false);
  const [isOpen,setIsOpen] = useState(false);
  const login = () => {
    window.alert("you've bought vip package");
  };
  const login2 = () => {
    window.alert("you've bought premium package");
  };
  const push = () => {
    history.push("/Checkout");
  };

  const history = useHistory();
  return (
    <div className="subscription">
      <div className="subscription_plans">
        <img
          src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
          alt=""
        />
        <h1>Choose Plans</h1>
      </div>
      <div className="subscription_packages">
        <div className="subscription_vip">
          <h2
          onClick={()=>setOpen(true)}
          >
            {/* history.push("/Checkout") */}
            Disney+ Hotstar VIP
          </h2>
          <VipPackage open={open}/>
          <PremiumPackage isOpen={isOpen}/>
          <img
            src="https://secure-media.hotstar.com/static/subscription/logo/psp-lite/vip-big-1x.png"
            srcset="https://secure-media.hotstar.com/static/subscription/logo/psp-lite/vip-big-2x.png 2x, https://secure-media.hotstar.com/static/subscription/logo/psp-lite/vip-big-3x.png 3x"
            alt=""
          />
        </div>
        <div className="subscription_premium">
          <h2
            // onClick={() => {
            //   push();
            //   login2();
            // }}
            onClick={() =>setIsOpen(true)}
          >
            Disney+ Hotstar Premium
          </h2>
          <img
            src="https://secure-media.hotstar.com/static/subscription/logo/psp-lite/premium-big-1x.png"
            srcset="https://secure-media.hotstar.com/static/subscription/logo/psp-lite/premium-big-2x.png 2x, https://secure-media.hotstar.com/static/subscription/logo/psp-lite/premium-big-3x.png 3x"
            alt=""
          />
        </div>
      </div>
      <div class="subscription_Contents">
        <div class="subcription_planVip">
          <header>
            <h2 class="subscription_plantitle">VIP package</h2>
            <img
              src="https://secure-media.hotstar.com/static/subscription/logo/psp-lite/vip-big-1x.png"
              srcset="https://secure-media.hotstar.com/static/subscription/logo/psp-lite/vip-big-2x.png 2x, https://secure-media.hotstar.com/static/subscription/logo/psp-lite/vip-big-3x.png 3x"
              alt=""
            />
            <div class="subscription_plancost">
              <span class="plan-price">₹399/year</span>
            </div>
          </header>
          <ul class="subscription_planfeatures">
            <div className="subscription_planfeaturesContent">
              <h3>Unlimited Live Sports</h3>
              <CheckIcon />
            </div>
            <div className="subscription_planfeaturesContent">
              <h3>Hotstar Specials & Star serials</h3>
              <CheckIcon />
            </div>
            <div className="subscription_planfeaturesContent">
              <h3>Multiplex & new Indian movies</h3>
              <CheckIcon />
            </div>
            <div className="subscription_planfeaturesContent">
              <h3>Ad free entertainment</h3>
              <ClearIcon />
            </div>
            <div className="subscription_planfeaturesContent">
              <h3>Video quality -1080p HD</h3>
              <CheckIcon />
            </div>
            <div className="subscription_planfeaturesContent">
              <h3>English shows & Disney+ Originals</h3>
              <ClearIcon />
            </div>

            <h3>Screens you can watch on - 1</h3>
          </ul>
        </div>
        <div class="subcription_planPremium">
          <header>
            <h2 class="subscription_plantitle">Premium package</h2>
            <img
              src="https://secure-media.hotstar.com/static/subscription/logo/psp-lite/premium-big-1x.png"
              srcset="https://secure-media.hotstar.com/static/subscription/logo/psp-lite/premium-big-2x.png 2x, https://secure-media.hotstar.com/static/subscription/logo/psp-lite/premium-big-3x.png 3x"
              alt=""
            />
            <div class="subscription_plancost">
              <span class="plan-price">₹1499/year</span>
            </div>
          </header>
          <ul class="subscription_planfeatures">
            <div className="subscription_planfeaturesContent">
              <h3>Unlimited Live Sports</h3>
              <CheckIcon />
            </div>
            <div className="subscription_planfeaturesContent">
              <h3>Hotstar Specials & Star serials</h3>
              <CheckIcon />
            </div>
            <div className="subscription_planfeaturesContent">
              <h3>Multiplex & new Indian movies</h3>
              <CheckIcon />
            </div>
            <div className="subscription_planfeaturesContent">
              <h3>Ad free entertainment</h3>
              <CheckIcon />
            </div>
            <div className="subscription_planfeaturesContent">
              <h3>Video quality -1080p HD</h3>
              <CheckIcon />
            </div>
            <div className="subscription_planfeaturesContent">
              <h3>English shows & Disney+ Originals</h3>
              <CheckIcon />
            </div>
            <h3>Screens you can watch on - 2</h3>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
