// import react component
import { Component } from "react"
// import components
import Button from "../components/ui/button/Button"
import InputBox from "../components/ui/inputBox/InputBox"

// lottie import
import { Player, Controls } from "@lottiefiles/react-lottie-player"
import withRouter from "../withNavigation"

class Home extends Component {
  constructor(props) {
    
    super(props)
    this.user = {
      name: "",
      mail: "",
      gameWon: 0
    }
  }

  // get name and mail value
  getName(e){
    this.user.name = e.target.value
  }

  getMail(e){
    this.user.mail = e.target.value
  }

  startGame() {
    localStorage.setItem('user', JSON.stringify(this.user))
    this.props.router.navigate('/game', {state: this.user})
  }

  render() {
    return (
      <div className="Home">
        <h1>LA MORRA DEGLI EROI</h1>
        <form>
          <InputBox
            placeholder={"Inserisci il tuo nome"}
            callBackChange={this.getName.bind(this)}
          />
          <InputBox
            placeholder={"Inserisci la tua email"}
            callBackChange={this.getMail.bind(this)}
            type={"email"}
          />
          <Button
            label={"Inizia la sfida"}
            callBack={this.startGame.bind(this)}
          />
        </form>

        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/animated_stickers/lf_tgs_j7miwfxd.json"
          style={{ height: "300px", width: "300px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
    )
  }
}

export default withRouter(Home)
