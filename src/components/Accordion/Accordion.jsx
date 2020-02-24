import React, { useState } from 'react'
import { Accordion as SemanticAccordion, Icon} from 'semantic-ui-react'

const Accordion = ({ options }) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index

        setActiveIndex(newIndex)
    }

    return (
        <SemanticAccordion fluid styled>
            {options.map((faq, index) => (
                <>
                <SemanticAccordion.Title active={activeIndex === index} index={index} onClick={handleClick}>
                    <Icon name='dropdown' />
                    {faq.question}
                </SemanticAccordion.Title>
                <SemanticAccordion.Content active={activeIndex === index}>
                    <p>
                        {faq.answer}
                    </p>
                </SemanticAccordion.Content>
                </>
            ))}
      </SemanticAccordion>
    )
}

export default Accordion