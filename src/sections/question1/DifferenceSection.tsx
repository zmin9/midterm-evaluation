import Section from '../../components/Section';
import differenceWithOthers from '../../data/differenceWithOthers';
import ImageWithStretchedBg from '../../components/image/ImageWithStretchedBg';

const DifferenceSection = () => {
  return (
    <>
      {differenceWithOthers.map((diff, idx) => (
        <Section key={diff.title} bgColor={idx % 2 ? 'bg1' : 'bg2'} paddingT={60} paddingB={40}>
          <Section.Subtitle>{`차이점 ${idx + 1}`}</Section.Subtitle>
          <Section.Title>{diff.title}</Section.Title>
          <Section.Content>{diff.description}</Section.Content>
          <Section.Card>
            <ImageWithStretchedBg height='335px' src={diff.graphImg} alt={`차이점${idx + 1}`}/>
          </Section.Card>
        </Section>
      ))}
    </>
  );
};

export default DifferenceSection;
