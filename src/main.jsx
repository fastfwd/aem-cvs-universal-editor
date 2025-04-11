import decorateCardLinks from '../blocks/cvs/CardLinks/cardlinks';
import decorateFindPracticesBanner from '../blocks/cvs/FindPracticesBanner/findpracticesbanner';
import decorateHeroBanner from '../blocks/cvs/HeroBanner/herobanner';
import decorateMultiColumnContent from '../blocks/cvs/MultiColumnContent/multicolumncontent';
import decoratePurposeBanner from '../blocks/cvs/PurposeBanner/purposebanner';
import decorateRichText from '../blocks/cvs/RichText/richtext';
import decorateStatsSection from '../blocks/cvs/StatsSection/statssection';
import decorateTextAndImage from '../blocks/cvs/TextAndImage/textandimage';
import decorateThreeColumnCards from '../blocks/cvs/ThreeColumnCards/threecolumncards';

const root = document.querySelector('#root');

const cardlinks = document.createElement('div');
decorateCardLinks(cardlinks);
root.appendChild(cardlinks);

const findPracticesBanner = document.createElement('div');
decorateFindPracticesBanner(findPracticesBanner);
root.appendChild(findPracticesBanner);

const heroBanner = document.createElement('div');
decorateHeroBanner(heroBanner);
root.appendChild(heroBanner);

const multiColumnContent = document.createElement('div');
decorateMultiColumnContent(multiColumnContent);
root.appendChild(multiColumnContent);

const purposeBanner = document.createElement('div');
decoratePurposeBanner(purposeBanner);
root.appendChild(purposeBanner);

const richText = document.createElement('div');
decorateRichText(richText);
root.appendChild(richText);

const statsSection = document.createElement('div');
decorateStatsSection(statsSection);
root.appendChild(statsSection);

const textAndImage = document.createElement('div');
decorateTextAndImage(textAndImage);
root.appendChild(textAndImage);

const threeColumnCards = document.createElement('div');
decorateThreeColumnCards(threeColumnCards);
root.appendChild(threeColumnCards);