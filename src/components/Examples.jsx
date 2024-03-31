import { useState } from 'react';
import TabButton from './TabButton/TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        // selectedButton contains the values 'components', 'jsx', 'props', 'state' defined on the onSelect prop defined on each TabButton component
        setSelectedTopic(selectedButton);
    }

    return (
        //Forwarding props to wrapped elements.
        <Section title="Examples" id="examples">
            <menu>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    onSelect={() => handleSelect('components')}>Components
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onSelect={() => handleSelect('jsx')}>JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onSelect={() => handleSelect('props')}>Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onSelect={() => handleSelect('state')}>State
                </TabButton>
            </menu>
            <div id='tab-content'>
                {!selectedTopic && <p>Please select a topic.</p>}
                {selectedTopic && <div>
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>
                }
            </div>
        </Section>
    );
}