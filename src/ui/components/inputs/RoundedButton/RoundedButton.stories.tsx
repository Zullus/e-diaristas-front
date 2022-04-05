import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import RoundedButton from "./RoundedButton";

export default{
    title: 'inputs/RoundedButton',
    component: RoundedButton,
} as ComponentMeta<typeof RoundedButton>;

const Template: ComponentStory<typeof RoundedButton> = (args) => <RoundedButton {...args}>Clique Aqui</RoundedButton>

export const Default = Template.bind({});
Default.args = {
    variant: 'contained',
}

/*

export const MeuNovoBotao = Template.bind({});
MeuNovoBotao.args = {};

export const MeuNovoBotaoComCor = Template.bind({});
MeuNovoBotaoComCor.args = {
    variant: 'contained',
}

export const MeuBotao = () => <RoundedButton>Clique Aqui</RoundedButton>;

export const MeuBotaoComCor = () => (
    <RoundedButton variant={'contained'}>Clique Aqui</RoundedButton>
);
*/