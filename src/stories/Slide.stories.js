import Slide from '../components/Slide'

export default {
    title: 'Slide',
    component: Slide
}

const Template = args => <Slide {...args} />

export const FullWidth = Template.bind({})
FullWidth.args = {
    size: 'regular',
    range: false,
    steps: false,
    hoverValues: false,
}

export const Small = Template.bind({})
Small.args = {
    width: 300,
    size: 'small',
    range: false,
    steps: false,
    hoverValues: false,
}

export const Range = Template.bind({})
Range.args = {
    range: true,
    size: 'regular',
    width: 300,
    steps: false,
    hoverValues: true,
}

export const Steps = Template.bind({})
Steps.args = {
    range: false,
    size: 'regular',
    width: 300,
    steps: true,
    hoverValues: true,
}

export const NoHoverValues = Template.bind({})
NoHoverValues.args = {
    range: false,
    size: 'regular',
    width: 300,
    steps: false,
    hoverValues: false,
}