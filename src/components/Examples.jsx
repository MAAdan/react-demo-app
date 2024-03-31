import { useState } from 'react';
import TabButton from './TabButton/TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        // selectedButton contains the values 'components', 'jsx', 'props', 'state' defined on the onClick prop defined on each TabButton component
        setSelectedTopic(selectedButton);
    }

    return (
        //Forwarding props to wrapped elements.
        <Section title="Examples" id="examples">
            {/* buttonsContainer is used to pass the element in which we want to wrap the jsx elements, for built-in elements strings are used like so buttonsContainer="menu" and for custom components a pointer to a different custom component like so "buttonsContainer={Section}". The "menu" value in this case is set as default value in the Tabs function */}
            <Tabs
                buttons={
                <>
                    {/* TabButton is a custom component that doesn't have the onClick prop, however it is being forwarded to the button component that contains this property */}
                    <TabButton
                        isSelected={selectedTopic === 'components'}
                        onClick={() => handleSelect('components')}>Components
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'jsx'}
                        onClick={() => handleSelect('jsx')}>JSX
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'props'}
                        onClick={() => handleSelect('props')}>Props
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'state'}
                        onClick={() => handleSelect('state')}>State
                    </TabButton>
                </>
            }>
            </Tabs>
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