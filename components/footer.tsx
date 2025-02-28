import { APP_NAME } from "@/lib/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="p-5 flex-center">
        {currentYear} {APP_NAME}. All Rights Reserved
      </div>
    </footer>
  );
};
