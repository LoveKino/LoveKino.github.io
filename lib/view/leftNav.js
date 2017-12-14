'use strict';

const {
    lumineView,
    n,
    Signal
} = require('kabanery-lumine');

module.exports = lumineView(({
    props
}, ctx) => {
    return n('div', {
        style: props.style.container
    }, props.category.map((item, index) => {
        return n('div', {
            style: index === props.currentItemPosition ? props.style.highlightItem : props.style.item,
            onclick: () => {
                ctx.updateWithNotify(Signal('switch', index), 'props.currentItemPosition', index);
            }
        }, [item]);
    }));
}, {
    defaultProps: {
        category: [],
        currentItemPosition: 0,
        style: {
            container: {
                overflow: 'hidden',
                borderRight: '1px solid rgb(232, 234, 235)',
                height: '100%'
            },
            highlightItem: {
                backgroundColor: 'rgb(212, 237, 254)',
                padding: '8 28',
                fontSize: 18,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                cursor: 'pointer',
                textOverflow: 'ellipsis'
            },
            item: {
                padding: '8 28',
                fontSize: 18,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                cursor: 'pointer',
                overflow: 'hidden'
            }
        }
    }
});
