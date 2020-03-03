import React, { createRef, useCallback } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { Sticky, Ref, Grid } from 'semantic-ui-react'
import VisibilitySensor from "react-visibility-sensor";


const NewChat = () => {

    const fade = useSpring({ from: { opacity: 0}, opacity: 1})

    
    const stickyRef = createRef();

    const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [])

    return (
        <VisibilitySensor>
            {({ isVisible })} => (

            )
        </VisibilitySensor>
    )
    // return (
    //     <Ref innerRef={stickyRef} onScroll={onScroll}>
    //         <Grid container centered columns={2}>
    //             <Grid.Column computer={6}>
    //                 {/* Explanation */}
    //                 <animated.div style={props}>

    //                 </animated.div>
    //             </Grid.Column>
    //             <Grid.Column computer={10}>
    //                 {/* Chat  */}
    //                 <animated.div style={props}>

    //                 </animated.div>
    //             </Grid.Column>
    //         </Grid>

    //     </Ref>
    // )
}

export default NewChat