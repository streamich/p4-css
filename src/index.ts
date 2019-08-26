import {createElement} from 'react';
import {create} from 'nano-css';
import {addon as addonCache} from 'nano-css/addon/cache';
import {addon as addonStable} from 'nano-css/addon/stable';
import {addon as addonNesting} from 'nano-css/addon/nesting';
import {addon as addonAtoms} from 'nano-css/addon/atoms';
import {addon as addonRule} from 'nano-css/addon/rule';
import {addon as addonDrule} from 'nano-css/addon/drule';
import {addon as addonSheet} from 'nano-css/addon/sheet';
import {addon as addonDsheet} from 'nano-css/addon/dsheet';
import {addon as addonUseStyles} from 'nano-css/addon/useStyles';
import {addon as addonJsx} from 'nano-css/addon/jsx';
import {addon as addonDecorator} from 'nano-css/addon/decorator';
import {addon as addonKeyframes} from 'nano-css/addon/keyframes';
import {addon as addonAnimateFadeIn} from 'nano-css/addon/animate/fadeIn';
import {addon as addonAnimateFadeInDown} from 'nano-css/addon/animate/fadeInDown';
import {addon as addonAnimateFadeInScale} from 'nano-css/addon/animate/fadeInScale';
import {addon as addonReset} from 'nano-css/addon/reset/Normalize';
import {addon as addonResetFont} from 'nano-css/addon/reset-font';
import {addon as addonGoogleFont} from 'nano-css/addon/googleFont';

const nano = create({
  pfx: 'p4-',
  h: createElement,
});

addonCache(nano);
addonStable(nano);
addonNesting(nano);
addonAtoms(nano);
addonRule(nano);
addonDrule(nano);
addonSheet(nano);
addonDsheet(nano);
addonUseStyles(nano);
addonJsx(nano);
addonDecorator(nano);
addonKeyframes(nano);
addonAnimateFadeIn(nano);
addonAnimateFadeInDown(nano);
addonAnimateFadeInScale(nano);
addonGoogleFont(nano);

export const globalCss = () => {
  addonReset(nano);
  addonResetFont(nano);
};

const {put, rule, drule, sheet, keyframes, css} = nano;
const {dsheet, useStyles, jsx, googleFont} = nano as any;

export {nano, put, rule, drule, sheet, dsheet, keyframes, useStyles, jsx, css, googleFont};
