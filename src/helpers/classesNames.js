export const classesDefs = {
  AlignContent: {
    flexStart: {
      name: 'aligncontentflexstart',
      atrDef: 'flex-start'
    },
    flexEnd: {
      name: 'aligncontentflexend',
      atrDef: 'flex-end'
    },
    center: {
      name: 'aligncontentcenter',
      atrDef: 'center'
    },
    stretch: {
      name: 'aligncontentstretch',
      atrDef: 'stretch'
    },
    spaceBetween: {
      name: 'aligncontentspacebetween',
      atrDef: 'space-between'
    },
    spaceAround: {
      name: 'aligncontentspacearound',
      atrDef: 'space-around'
    },
  },
  AlignItems: {
    flexStart: {name: 'alignitemsflexstart', atrDef: 'flex-start'},
    flexEnd: {name: 'alignitemsflexend', atrDef: 'flex-end'},
    center: {name: 'alignitemscenter', atrDef: 'center'},
    stretch: {name: 'alignitemsstretch', atrDef: 'stretch'},
    baseline: {name: 'alignitemsbaseline', atrDef: 'baseline'},
  },
  FlexDirection: {
    row: {name: 'flexdirectionrow', atrDef: 'row'},
    rowReverse: {name: 'flexdirectionrreverse', atrDef: 'row-reverse'},
    column: {name: 'flexdirectioncolumn', atrDef: 'column'},
    columnReverse: {name: 'flexdirectioncolreverse', atrDef: 'column-reverse'},
  },
  FlexWrap: {
    wrap: {name: 'flexwrapwrap', atrDef: 'wrap'},
    nowrap: {name: 'flexwrapnowrap', atrDef: 'nowrap'},
    wrapReverse: {name: 'flexwrapreverse', atrDef: 'wrap-reverse'},
  },
  JustifyContent: {
    flexStart: {name: 'justifycontentflexstart', atrDef: 'flex-start'},
    flexEnd: {name: 'justifycontentflexend', atrDef: 'flex-end'},
    center: {name: 'justifycontentcenter', atrDef: 'center'},
    spaceBetween: {name: 'justifycontentspacebetween', atrDef: 'space-between'},
    spaceAround: {name: 'justifycontentspacearound', atrDef: 'space-around'},
    spaceEvenly: {name: 'justifycontentspaceevenly', atrDef: 'space-evenly'}
  }
}
