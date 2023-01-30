import Block from "../Block";
import Button from "../common/Button";

import s from "./Info.module.scss";

const Info = () => {
  const clients = [
    { label: "Clients", value: "9" },
    { label: "Accounts", value: "32" },
    { label: "Assets", value: "$ 1,342,123.27" },
    { label: "Funds", value: "426 funds" },
  ];

  const holdings = [
    "Dodge & Cox Stock |",
    "Fidelity Advisor Mid Cap Value M",
    "UBS Emerging Markets Equity Opp P2",
  ];

  const views = [
    { label: "Client Summary", value: "Alex Capital" },
    { label: "Account Summary", value: "Alex Capital" },
    { label: "Account", value: "Portfolio" },
  ];

  return (
    <div className={s.info}>
      <Block title="Clients Summary">
        <div>
          {clients.map((item) => (
            <div className={s.clients}>
              <span>{item.label}</span> <span>{item.value}</span>
            </div>
          ))}
        </div>
        <div className={s.clients_buttons}>
          <Button title="Clients List" />
          <Button title="Clients List" />
        </div>
      </Block>
      <Block title="Holdings">
        <div>
          <div className={s.block_title}>Top 10 Holdings</div>
          <div className={s.holdings_links}>
            {holdings.map((item) => (
              <div>{item}</div>
            ))}
          </div>
        </div>
        <div>
          <Button title="Replace funds" />
        </div>
      </Block>
      <Block title="Stylus Web 2.0">
        <div>
          <div className={s.block_title}>Recently Viewed</div>
          <div className={s.web_wrapper}>
            {views.map((item) => (
              <div className={s.web}>
                <span>{item.label}</span>
                <span className={s.web_link}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Block>
    </div>
  );
};

export default Info;
