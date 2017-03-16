class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Forage"
        onPress={() => navigate ('Main')}
      />
    );
  }
}

export default MainScreen
