import React, { Component } from 'react'

export default class Grid extends Component {

    toCssClasses(numbers) {
        let size = ['xs', 'sm', 'md', 'lg']

        let cols = numbers ? numbers.split(' ') : []
        let classes = ''

        for(let i = 0; i < 4; ++i) {
            if(cols[i]) {
                classes += `col-${size[i]}-${cols[i]} `
            }
        }
        return classes
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || '12')
        return (
           <div className={ gridClasses }>
               { this.props.children }
           </div> 
        )
    }
}
