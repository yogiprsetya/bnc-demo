import React from "react";
import { Switch } from "antd";

interface ChangeLanguageProps {
  onChangeLanguage: (value: boolean) => void;
  languageBoolean: boolean;
}

const MenuRight: React.FC<ChangeLanguageProps> = ({
  onChangeLanguage,
  languageBoolean,
}) => {
  return (
    <Switch
      checkedChildren="id"
      unCheckedChildren="en"
      onClick={onChangeLanguage}
      checked={languageBoolean}
    />
  );
};

export default MenuRight;
