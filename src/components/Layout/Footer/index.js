import ContactsItem from "./ContactsItem";
import Copyright from "./Copyright";
import Information from "./Information";
import Payments from "./Payments";
import SectionBlock from "./SectionBlock";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <SectionBlock title="Информация">
            <Information />
          </SectionBlock>
        </div>
        <div className="col">
          <SectionBlock title="Принимаем к оплате:">
            <Payments />
          </SectionBlock>
          <SectionBlock>
            <Copyright />
          </SectionBlock>
        </div>
        <div className="col text-right">
          <SectionBlock title="Контакты:">
            <ContactsItem link={"tel:+7-495-790-35-03"} classNameType={"phone"}>
              +7 495 79 03 5 03
            </ContactsItem>
            <ContactsItem classNameType={"working-hours"}>
              Ежедневно: с 09-00 до 21-00
            </ContactsItem>
            <ContactsItem link={"mailto:office@bosanoga.ru"} classNameType={"email"}>
              office@bosanoga.ru
            </ContactsItem>
            <Social />
          </SectionBlock>
        </div>
      </div>
    </footer>
  );
}
