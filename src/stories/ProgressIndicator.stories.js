import LinearProgressIndicator, { CircularProgressIndicator } from "../components/ProgressIndicator";

export default {
    title: 'Linear Progress Indicator',
    component: LinearProgressIndicator
}

const LinearTemplate = args => <LinearProgressIndicator {...args} />
const CircularTemplate = args => <CircularProgressIndicator {...args} />

export const LinearNoLabel = LinearTemplate.bind({})

export const LinearLabel = LinearTemplate.bind({})
LinearLabel.args = {
    label: true
}

export const CircularNoLabel = CircularTemplate.bind({})

export const CircularLabel = CircularTemplate.bind({})
CircularLabel.args = {
    label: true
}