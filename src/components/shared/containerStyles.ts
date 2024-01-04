class ContainerStyles {
  containerStyle(isAuth: boolean) {
    const containerStyle = {
      maxWidth: isAuth ? "1440px" : "none",
      padding: isAuth ? "0 20px" : "0",
      margin: "auto",
    };
    return containerStyle;
  }
}

export const containerStyles = new ContainerStyles();
