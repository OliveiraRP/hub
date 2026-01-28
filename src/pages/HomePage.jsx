import { ENV } from "../config/env";
import { OneColumnTemplate } from "@ui/templates/OneColumnTemplate";
import { AppComponent } from "@ui/components/AppComponent";
import { PageHeaderComponent } from "@ui/components/headers/PageHeaderComponent";
import bmIcon from "@assets/icons/bmIcon.png";

export default function HomePage() {
  const goToBudgetManager = () => {
    const token = localStorage.getItem("authToken");
    window.location.href = `${ENV.BUDGET_MANAGER_URL}?t=${token}`;
  };

  return (
    <OneColumnTemplate header={<PageHeaderComponent title={"Discover"} />}>
      <AppComponent icon={bmIcon} onClick={goToBudgetManager} />
    </OneColumnTemplate>
  );
}
