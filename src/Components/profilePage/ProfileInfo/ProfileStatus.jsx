import React from 'react';
import st from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        // console.log("componentDidUpdate")
        // console.log("SS=" + snapshot)
    }

    render() {
        //console.log("reder" + this.state.status)
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}
                          className={st.status}>{this.props.status || "-------"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={
                        this.deActivateEditMode
                    } value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;