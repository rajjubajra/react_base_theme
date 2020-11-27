import React, { useState, useEffect } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import GroupItem from './GroupItem';
import { useSelector } from 'react-redux';
import './GroupItems.scss';





const data = [
  {
    id: 0,
    itemTitle: "Music Four",
    itemBrief: "Style Hundred",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_14.JPG",
    itemGroup: 'music'
  },
  {
    id: 1,
    itemTitle: "Food One",
    itemBrief: "230UTSC",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Cake_0.jpeg",
    itemGroup: 'food'
  },
  {
    id: 2,
    itemTitle: "Food Two",
    itemBrief: "900TGG",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/DSC_2374_0.jpeg",
    itemGroup: 'food'
  },
  {
    id: 3,
    itemTitle: "Music One",
    itemBrief: "100TWZ",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_1.JPG",
    itemGroup: 'music'
  },
  {
    id: 4,
    itemTitle: "Coming soon",
    itemBrief: "300FTF",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail2_0.png",
    itemGroup: 'upcoming'
  },
  {
    id: 5,
    itemTitle: "Food Three",
    itemBrief: "Shirt 700",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/DSC_4944_0.jpeg",
    itemGroup: 'food'
  },
  {
    id: 6,
    itemTitle: "Music Two",
    itemBrief: "SDF0090DF",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_5.JPG",
    itemGroup: 'music'
  },
  {
    id: 7,
    itemTitle: "Coming Soon",
    itemBrief: "Style 700",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail3_0.png",
    itemGroup: 'upcoming'
  },
  {
    id: 8,
    itemTitle: "Food Four",
    itemBrief: "Style 300HD",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/DSC_2379_0.jpeg",
    itemGroup: 'food'
  },
  {
    id: 9,
    itemTitle: "Music Three",
    itemBrief: "TZO 900",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_10.JPG",
    itemGroup: 'music'
  },
  {
    id: 10,
    itemTitle: "Coming Soon",
    itemBrief: "Style Hundred",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail4_0.png",
    itemGroup: 'upcoming'
  },

]




function GroupItems() {

  const [viewData, setViewData] = useState(data);

  const groupname = useSelector(state => state.reducerSelectGroup.groupname);

  //  console.log('groupname', groupname);

  useEffect(() => {
    setViewData(data.map(item => {
      return groupname === 'all'
        ? { ...item }
        : item.itemGroup !== groupname ? { ...item, itemGroup: 'd-none' } : item
    })
    );
  }, [groupname])

  let delay = 0;



  return (
    <CardColumns>
      {
        viewData.map((item, index) => {
          return (
            <GroupItem
              key={index}
              itemTitle={item.itemTitle}
              itemBrief={item.itemBrief}
              itemImg={item.itemImg}
              itemGroup={item.itemGroup}
              delay={item.itemGroup !== 'd-none' ? ++delay : ''}
            />
          )
        })
      }
    </CardColumns>
  )
}

export default GroupItems
