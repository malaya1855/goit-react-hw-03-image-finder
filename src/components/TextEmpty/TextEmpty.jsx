import { Text } from './TextEmpty.styled';
export const TextEmpty = ({ query }) => {
  return (
    <Text
      style={{
        fontSize: 20,
        color: '#010101',
        textAlign: 'center',
      }}
    >
      Sorry. According to your search "{query}" there are no images...
    </Text>
  );
};
