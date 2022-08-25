import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

function App() {
  const data = [
    {
      plan: "FREE",
      price: 0,
      features: [
        {
          title: "Single User",
          isEnable: true,
        },
        {
          title: "5GB Storage",
          isEnable: true,
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          title: "Community Access",
          isEnable: true,
        },
        {
          title: "Unlimited Private Projects",
          isEnable: false,
        },
        {
          title: "Dedicated Phone Support",
          isEnable: false,
        },
        {
          title: "Free Subdomain",
          isEnable: false,
        },
        {
          title: "Monthly Status Reports",
          isEnable: false,
        },
      ],
    },
    {
      plan: "PLUS",
      price: 9,
      features: [
        {
          title: "5 Users",
          isEnable: true,
          isBold: true,
        },
        {
          title: "50GB Storage",
          isEnable: true,
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          title: "Community Access",
          isEnable: true,
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true,
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true,
        },
        {
          title: "Free Subdomain",
          isEnable: true,
        },
        {
          title: "Monthly Status Reports",
          isEnable: false,
        },
      ],
    },

    {
      plan: "PRO",
      price: 49,
      features: [
        {
          title: "Unlimited Users",
          isEnable: true,
        },
        {
          title: "150GB Storage",
          isEnable: true,
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          title: "Community Access",
          isEnable: true,
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true,
          isBold: true,
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true,
        },
        {
          title: "Free Subdomain",
          isEnable: true,
        },
        {
          title: "Monthly Status Reports",
          isEnable: true,
        },
      ],
    },
  ];
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {data.map((item) => {
            return <Card item={item}></Card>;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
