import React, { Component } from 'react'
import './directory.styles.scss'
import MenuItem from '../menu/menu-item.component'

class Directory extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sections: [
                {
                    title: 'gorros',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    size: 'normal',
                    id: 1,
                    linkUrl: 'tienda/gorros'
                },
                {
                    title: 'chaquetas',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    size: 'normal',
                    id: 2,
                    linkUrl: 'tienda/jackets'
                },
                {
                    title: 'calzado',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    size: 'normal',
                    id: 3,
                    linkUrl: 'tienda/sneakers'
                },
                {
                    title: 'mujeres',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'tienda/womens'
                },
                {
                    title: 'hombres',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'tienda/mens'
                }
            ]
        }
    }

    render() {
        return (

            <div className='directory-menu'>
                {this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem
                        id={id}
                        title={title}
                        imageUrl={imageUrl}
                        size={size}
                    />
                ))}
            </div>
        )
    }
}

export default Directory;