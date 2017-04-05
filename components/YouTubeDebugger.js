import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor(){
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

      this.changeBitrate = this.changeBitrate.bind(this)
      this.changeResolution = this.changeResolution.bind(this)
  }

  changeBitrate(){
    this.state.settings.bitrate = 12
    this.forceUpdate()
  }

  changeResolution(){
    this.state.settings.video.resolution = '720p'
    this.forceUpdate()
  }

  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}></button>
        <button className="resolution" onClick={this.changeResolution}></button>
      </div>
    )
  }
}
