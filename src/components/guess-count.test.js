import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the correct guess count', () => {
      const test_count = 8;
      const wrapper = shallow(<GuessCount guessCount={test_count} />);
      expect(wrapper.text()).toEqual(`You've made ${test_count} guesses!`);
    });

});
