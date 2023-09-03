import { AppBar, Toolbar, styled, Box } from "@mui/material";

import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

import ChatDialog from "./chat/ChatDialog";
import LoginDialog from "../Components/Accounts/LoginDialog";

const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const Header = styled(AppBar)`
  background-color: #00a884;
  height: 125px;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  background: #00bfa5;
  height: 200px;
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
