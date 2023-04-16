import {Component} from 'react'

import {
  MainHeading,
  FormContainer,
  SubContainer,
  AppContainer,
  OutputContainer,
  Label,
  Button,
  Heading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

// Write your code here
class MemeGenerator extends Component {
  state = {
    head1: '',
    head2: '',
    image: '',
    activeId: fontSizesOptionsList[0].optionId,
    finalHead1: '',
    finalHead2: '',
    finalImage: '',

    font: '',
  }

  onChangeImg = e => {
    this.setState({image: e.target.value})
  }

  onChangeHead1 = e => {
    this.setState({head1: e.target.value})
  }

  onChangeHead2 = e => {
    this.setState({head2: e.target.value})
  }

  onChangeOption = e => {
    this.setState({activeId: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()
    const {head1, head2, image, activeId} = this.state
    this.setState({
      finalHead1: head1,
      finalHead2: head2,
      finalImage: image,
      font: activeId,
    })
  }

  render() {
    const {
      image,
      head1,
      head2,
      finalHead1,
      finalHead2,
      finalImage,
      activeId,
      font,
    } = this.state
    console.log(font)
    return (
      <AppContainer>
        <SubContainer>
          <FormContainer onSubmit={this.onSubmit}>
            <MainHeading>Meme Generator</MainHeading>
            <Label htmlFor="img">Image URL</Label>
            <input
              type="text"
              onChange={this.onChangeImg}
              value={image}
              placeholder="Enter the Image URL"
              id="img"
            />
            <Label htmlFor="headOne">Top Text</Label>
            <input
              type="text"
              onChange={this.onChangeHead1}
              value={head1}
              placeholder="Enter the Top Text"
              id="headOne"
            />
            <Label htmlFor="headTwo">Bottom Text</Label>
            <input
              type="text"
              onChange={this.onChangeHead2}
              value={head2}
              placeholder="Enter the Bottom Text"
              id="headTwo"
            />
            <Label htmlFor="fn-size">Font Size</Label>
            <select
              onChange={this.onChangeOption}
              value={activeId}
              id="fn-size"
            >
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <Button type="submit">Generate</Button>
          </FormContainer>
        </SubContainer>
        <OutputContainer data-testid="meme" bgImg={finalImage}>
          <Heading fontSize={font}>{finalHead1}</Heading>
          <Heading fontSize={font}>{finalHead2}</Heading>
        </OutputContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
