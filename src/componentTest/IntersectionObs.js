import React, { useRef, useEffect, useState } from 'react';
import Header from './Header';


const boxStyle = {
  width: "400px",
  height: "400px",
  background: "#ff0000"
}

function IntersectionObs() {

  /** Intersecton Observer */
  const ref = useRef();
  const [obs, setObs] = useState(false);
  console.log("observer", obs);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        console.log(entry.isVisible);
        console.log(entry.isIntersecting);
        console.log(entry.intersectionRatio);

        setObs(entry.isVisible);

        if (entry.isIntersecting) {
          //do your actions here
          console.log('It works!')
          setObs(true)
        }
      },
      {
        //root: null,
        /** rootMargin works like css margin */
        // rootMargin: "-500px 0px 0px 0px",
        /** 0 is beging point of the {ref} object entering into the view area 
         *  1 is the ending point of the {ref} object entering into the view area
         * threshold can be  0 to 1,
         * threshold can be in array eg [0.2, 0.4, 0.6]
        */
        threshold: 0
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);


  return (

    <div className="container mb-5">

      <Header />

      <div className="row">
        <div className="col">
          <h1>Intersection Objsever</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="mt-5 mb-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime, doloribus voluptate eos deserunt culpa sint sunt obcaecati, aliquid distinctio labore laudantium tenetur ipsa fuga nemo illum, consectetur facere blanditiis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt blanditiis ipsum numquam reiciendis ipsam quae, pariatur saepe velit incidunt, laboriosam et. Natus nisi pariatur voluptas expedita rem ipsam porro, illum cupiditate qui et deserunt assumenda fugit, accusantium sunt quae in corrupti odio! Eos repellendus tempore incidunt dolores modi culpa, odit ipsa tempora in? Quo eligendi debitis vitae blanditiis earum eaque cupiditate aliquid! Ea tenetur sequi iusto, corrupti omnis voluptatum reprehenderit reiciendis eos, aliquam fuga qui doloribus alias labore ex quia itaque. Placeat laboriosam quod ad, excepturi aperiam blanditiis enim voluptas quibusdam animi,</p>
            <p>repellendus nesciunt consequatur deleniti! Aspernatur, perspiciatis. Numquam, vero porro blanditiis aliquam autem, cum laborum inventore consequuntur ducimus aperiam sed explicabo exercitationem assumenda itaque ipsum quasi ex at animi, molestiae quidem doloribus. In excepturi suscipit amet rem libero voluptatum fugiat atque a numquam officia sint animi itaque, quos minima saepe laborum, iure possimus repudiandae praesentium corrupti, ipsa quo illo officiis voluptatem. Explicabo maxime nemo ab nostrum enim! Quaerat natus amet cumque tempore, inventore, </p>
            <p>culpa dolore esse doloribus harum dolor magnam placeat voluptate, sed omnis provident nobis dolorem animi. Blanditiis dolore totam in eum sed exercitationem illo? A dolores iste nostrum. Deleniti, soluta. Eum, maiores optio! Illum maxime fugiat at!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illo delectus! Nostrum exercitationem, libero soluta corporis mollitia neque quam tenetur, quod omnis ea minima error at quas architecto repudiandae reprehenderit?</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="mt-5 mb-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime, doloribus voluptate eos deserunt culpa sint sunt obcaecati, aliquid distinctio labore laudantium tenetur ipsa fuga nemo illum, consectetur facere blanditiis!</p>
            <h3>{obs ? "Red Square Effect Starts" : "Red Square effect ends"}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt blanditiis ipsum numquam reiciendis ipsam quae, pariatur saepe velit incidunt, laboriosam et. Natus nisi pariatur voluptas expedita rem ipsam porro, illum cupiditate qui et deserunt assumenda fugit, accusantium sunt quae in corrupti odio! Eos repellendus tempore incidunt dolores modi culpa, odit ipsa tempora in? Quo eligendi debitis vitae blanditiis earum eaque cupiditate aliquid! Ea tenetur sequi iusto, corrupti omnis voluptatum reprehenderit reiciendis eos, aliquam fuga qui doloribus alias labore ex quia itaque. Placeat laboriosam quod ad, excepturi aperiam blanditiis enim voluptas quibusdam animi,</p>
            <p>repellendus nesciunt consequatur deleniti! Aspernatur, perspiciatis. Numquam, vero porro blanditiis aliquam autem, cum laborum inventore consequuntur ducimus aperiam sed explicabo exercitationem assumenda itaque ipsum quasi ex at animi, molestiae quidem doloribus. In excepturi suscipit amet rem libero voluptatum fugiat atque a numquam officia sint animi itaque, quos minima saepe laborum, iure possimus repudiandae praesentium corrupti, ipsa quo illo officiis voluptatem. Explicabo maxime nemo ab nostrum enim! Quaerat natus amet cumque tempore, inventore, </p>
            <p>culpa dolore esse doloribus harum dolor magnam placeat voluptate, sed omnis provident nobis dolorem animi. Blanditiis dolore totam in eum sed exercitationem illo? A dolores iste nostrum. Deleniti, soluta. Eum, maiores optio! Illum maxime fugiat at!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illo delectus! Nostrum exercitationem, libero soluta corporis mollitia neque quam tenetur, quod omnis ea minima error at quas architecto repudiandae reprehenderit?</p>
          </div>
        </div>
      </div>



      <div ref={ref} style={boxStyle}>

      </div>

      <h3>{obs ? "Red Square Effect Starts" : "Red Square effect ends"}</h3>

      <div className="row">
        <div className="col">
          <div className="mt-5 mb-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime, doloribus voluptate eos deserunt culpa sint sunt obcaecati, aliquid distinctio labore laudantium tenetur ipsa fuga nemo illum, consectetur facere blanditiis!</p>
            <h3>{obs ? "Red Square Effect Starts" : "Red Square effect ends"}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt blanditiis ipsum numquam reiciendis ipsam quae, pariatur saepe velit incidunt, laboriosam et. Natus nisi pariatur voluptas expedita rem ipsam porro, illum cupiditate qui et deserunt assumenda fugit, accusantium sunt quae in corrupti odio! Eos repellendus tempore incidunt dolores modi culpa, odit ipsa tempora in? Quo eligendi debitis vitae blanditiis earum eaque cupiditate aliquid! Ea tenetur sequi iusto, corrupti omnis voluptatum reprehenderit reiciendis eos, aliquam fuga qui doloribus alias labore ex quia itaque. Placeat laboriosam quod ad, excepturi aperiam blanditiis enim voluptas quibusdam animi,</p>
            <p>repellendus nesciunt consequatur deleniti! Aspernatur, perspiciatis. Numquam, vero porro blanditiis aliquam autem, cum laborum inventore consequuntur ducimus aperiam sed explicabo exercitationem assumenda itaque ipsum quasi ex at animi, molestiae quidem doloribus. In excepturi suscipit amet rem libero voluptatum fugiat atque a numquam officia sint animi itaque, quos minima saepe laborum, iure possimus repudiandae praesentium corrupti, ipsa quo illo officiis voluptatem. Explicabo maxime nemo ab nostrum enim! Quaerat natus amet cumque tempore, inventore, </p>
            <p>culpa dolore esse doloribus harum dolor magnam placeat voluptate, sed omnis provident nobis dolorem animi. Blanditiis dolore totam in eum sed exercitationem illo? A dolores iste nostrum. Deleniti, soluta. Eum, maiores optio! Illum maxime fugiat at!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illo delectus! Nostrum exercitationem, libero soluta corporis mollitia neque quam tenetur, quod omnis ea minima error at quas architecto repudiandae reprehenderit?</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="mt-5 mb-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime, doloribus voluptate eos deserunt culpa sint sunt obcaecati, aliquid distinctio labore laudantium tenetur ipsa fuga nemo illum, consectetur facere blanditiis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt blanditiis ipsum numquam reiciendis ipsam quae, pariatur saepe velit incidunt, laboriosam et. Natus nisi pariatur voluptas expedita rem ipsam porro, illum cupiditate qui et deserunt assumenda fugit, accusantium sunt quae in corrupti odio! Eos repellendus tempore incidunt dolores modi culpa, odit ipsa tempora in? Quo eligendi debitis vitae blanditiis earum eaque cupiditate aliquid! Ea tenetur sequi iusto, corrupti omnis voluptatum reprehenderit reiciendis eos, aliquam fuga qui doloribus alias labore ex quia itaque. Placeat laboriosam quod ad, excepturi aperiam blanditiis enim voluptas quibusdam animi,</p>
            <p>repellendus nesciunt consequatur deleniti! Aspernatur, perspiciatis. Numquam, vero porro blanditiis aliquam autem, cum laborum inventore consequuntur ducimus aperiam sed explicabo exercitationem assumenda itaque ipsum quasi ex at animi, molestiae quidem doloribus. In excepturi suscipit amet rem libero voluptatum fugiat atque a numquam officia sint animi itaque, quos minima saepe laborum, iure possimus repudiandae praesentium corrupti, ipsa quo illo officiis voluptatem. Explicabo maxime nemo ab nostrum enim! Quaerat natus amet cumque tempore, inventore, </p>
            <p>culpa dolore esse doloribus harum dolor magnam placeat voluptate, sed omnis provident nobis dolorem animi. Blanditiis dolore totam in eum sed exercitationem illo? A dolores iste nostrum. Deleniti, soluta. Eum, maiores optio! Illum maxime fugiat at!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illo delectus! Nostrum exercitationem, libero soluta corporis mollitia neque quam tenetur, quod omnis ea minima error at quas architecto repudiandae reprehenderit?</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="mt-5 mb-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime, doloribus voluptate eos deserunt culpa sint sunt obcaecati, aliquid distinctio labore laudantium tenetur ipsa fuga nemo illum, consectetur facere blanditiis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt blanditiis ipsum numquam reiciendis ipsam quae, pariatur saepe velit incidunt, laboriosam et. Natus nisi pariatur voluptas expedita rem ipsam porro, illum cupiditate qui et deserunt assumenda fugit, accusantium sunt quae in corrupti odio! Eos repellendus tempore incidunt dolores modi culpa, odit ipsa tempora in? Quo eligendi debitis vitae blanditiis earum eaque cupiditate aliquid! Ea tenetur sequi iusto, corrupti omnis voluptatum reprehenderit reiciendis eos, aliquam fuga qui doloribus alias labore ex quia itaque. Placeat laboriosam quod ad, excepturi aperiam blanditiis enim voluptas quibusdam animi,</p>
            <p>repellendus nesciunt consequatur deleniti! Aspernatur, perspiciatis. Numquam, vero porro blanditiis aliquam autem, cum laborum inventore consequuntur ducimus aperiam sed explicabo exercitationem assumenda itaque ipsum quasi ex at animi, molestiae quidem doloribus. In excepturi suscipit amet rem libero voluptatum fugiat atque a numquam officia sint animi itaque, quos minima saepe laborum, iure possimus repudiandae praesentium corrupti, ipsa quo illo officiis voluptatem. Explicabo maxime nemo ab nostrum enim! Quaerat natus amet cumque tempore, inventore, </p>
            <p>culpa dolore esse doloribus harum dolor magnam placeat voluptate, sed omnis provident nobis dolorem animi. Blanditiis dolore totam in eum sed exercitationem illo? A dolores iste nostrum. Deleniti, soluta. Eum, maiores optio! Illum maxime fugiat at!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illo delectus! Nostrum exercitationem, libero soluta corporis mollitia neque quam tenetur, quod omnis ea minima error at quas architecto repudiandae reprehenderit?</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="mt-5 mb-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime, doloribus voluptate eos deserunt culpa sint sunt obcaecati, aliquid distinctio labore laudantium tenetur ipsa fuga nemo illum, consectetur facere blanditiis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt blanditiis ipsum numquam reiciendis ipsam quae, pariatur saepe velit incidunt, laboriosam et. Natus nisi pariatur voluptas expedita rem ipsam porro, illum cupiditate qui et deserunt assumenda fugit, accusantium sunt quae in corrupti odio! Eos repellendus tempore incidunt dolores modi culpa, odit ipsa tempora in? Quo eligendi debitis vitae blanditiis earum eaque cupiditate aliquid! Ea tenetur sequi iusto, corrupti omnis voluptatum reprehenderit reiciendis eos, aliquam fuga qui doloribus alias labore ex quia itaque. Placeat laboriosam quod ad, excepturi aperiam blanditiis enim voluptas quibusdam animi,</p>
            <p>repellendus nesciunt consequatur deleniti! Aspernatur, perspiciatis. Numquam, vero porro blanditiis aliquam autem, cum laborum inventore consequuntur ducimus aperiam sed explicabo exercitationem assumenda itaque ipsum quasi ex at animi, molestiae quidem doloribus. In excepturi suscipit amet rem libero voluptatum fugiat atque a numquam officia sint animi itaque, quos minima saepe laborum, iure possimus repudiandae praesentium corrupti, ipsa quo illo officiis voluptatem. Explicabo maxime nemo ab nostrum enim! Quaerat natus amet cumque tempore, inventore, </p>
            <p>culpa dolore esse doloribus harum dolor magnam placeat voluptate, sed omnis provident nobis dolorem animi. Blanditiis dolore totam in eum sed exercitationem illo? A dolores iste nostrum. Deleniti, soluta. Eum, maiores optio! Illum maxime fugiat at!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illo delectus! Nostrum exercitationem, libero soluta corporis mollitia neque quam tenetur, quod omnis ea minima error at quas architecto repudiandae reprehenderit?</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="mt-5 mb-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime, doloribus voluptate eos deserunt culpa sint sunt obcaecati, aliquid distinctio labore laudantium tenetur ipsa fuga nemo illum, consectetur facere blanditiis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt blanditiis ipsum numquam reiciendis ipsam quae, pariatur saepe velit incidunt, laboriosam et. Natus nisi pariatur voluptas expedita rem ipsam porro, illum cupiditate qui et deserunt assumenda fugit, accusantium sunt quae in corrupti odio! Eos repellendus tempore incidunt dolores modi culpa, odit ipsa tempora in? Quo eligendi debitis vitae blanditiis earum eaque cupiditate aliquid! Ea tenetur sequi iusto, corrupti omnis voluptatum reprehenderit reiciendis eos, aliquam fuga qui doloribus alias labore ex quia itaque. Placeat laboriosam quod ad, excepturi aperiam blanditiis enim voluptas quibusdam animi,</p>
            <p>repellendus nesciunt consequatur deleniti! Aspernatur, perspiciatis. Numquam, vero porro blanditiis aliquam autem, cum laborum inventore consequuntur ducimus aperiam sed explicabo exercitationem assumenda itaque ipsum quasi ex at animi, molestiae quidem doloribus. In excepturi suscipit amet rem libero voluptatum fugiat atque a numquam officia sint animi itaque, quos minima saepe laborum, iure possimus repudiandae praesentium corrupti, ipsa quo illo officiis voluptatem. Explicabo maxime nemo ab nostrum enim! Quaerat natus amet cumque tempore, inventore, </p>
            <p>culpa dolore esse doloribus harum dolor magnam placeat voluptate, sed omnis provident nobis dolorem animi. Blanditiis dolore totam in eum sed exercitationem illo? A dolores iste nostrum. Deleniti, soluta. Eum, maiores optio! Illum maxime fugiat at!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illo delectus! Nostrum exercitationem, libero soluta corporis mollitia neque quam tenetur, quod omnis ea minima error at quas architecto repudiandae reprehenderit?</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="mt-5 mb-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime, doloribus voluptate eos deserunt culpa sint sunt obcaecati, aliquid distinctio labore laudantium tenetur ipsa fuga nemo illum, consectetur facere blanditiis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt blanditiis ipsum numquam reiciendis ipsam quae, pariatur saepe velit incidunt, laboriosam et. Natus nisi pariatur voluptas expedita rem ipsam porro, illum cupiditate qui et deserunt assumenda fugit, accusantium sunt quae in corrupti odio! Eos repellendus tempore incidunt dolores modi culpa, odit ipsa tempora in? Quo eligendi debitis vitae blanditiis earum eaque cupiditate aliquid! Ea tenetur sequi iusto, corrupti omnis voluptatum reprehenderit reiciendis eos, aliquam fuga qui doloribus alias labore ex quia itaque. Placeat laboriosam quod ad, excepturi aperiam blanditiis enim voluptas quibusdam animi,</p>
            <p>repellendus nesciunt consequatur deleniti! Aspernatur, perspiciatis. Numquam, vero porro blanditiis aliquam autem, cum laborum inventore consequuntur ducimus aperiam sed explicabo exercitationem assumenda itaque ipsum quasi ex at animi, molestiae quidem doloribus. In excepturi suscipit amet rem libero voluptatum fugiat atque a numquam officia sint animi itaque, quos minima saepe laborum, iure possimus repudiandae praesentium corrupti, ipsa quo illo officiis voluptatem. Explicabo maxime nemo ab nostrum enim! Quaerat natus amet cumque tempore, inventore, </p>
            <p>culpa dolore esse doloribus harum dolor magnam placeat voluptate, sed omnis provident nobis dolorem animi. Blanditiis dolore totam in eum sed exercitationem illo? A dolores iste nostrum. Deleniti, soluta. Eum, maiores optio! Illum maxime fugiat at!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illo delectus! Nostrum exercitationem, libero soluta corporis mollitia neque quam tenetur, quod omnis ea minima error at quas architecto repudiandae reprehenderit?</p>
          </div>
        </div>
      </div>

    </div>
  )

}

export default IntersectionObs
