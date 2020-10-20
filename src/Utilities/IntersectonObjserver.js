/** copy and past in to the Component */

/**
 * import requred useRef and useEffect
 */

/** Intersecton Observer */
const ref = useRef();
const [obs, setObs] = useState(false);
console.log("observer", obs);


useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      console.log(entry.isVisible);
      setObs(entry.isVisible);

      if (entry.isIntersecting) {
        //do your actions here
        console.log('It works!')
        setObs(true)
      }
    },
    {
      root: null,
      /** works like css margin  */
      rootMargin: "-200px 0px 0px 0px",
      /** 0 is beging point of the {ref} object entering into the view area 
        *  1 is the ending point of the {ref} object entering into the view area
       */
      threshold: 0.1
    }
  );
  if (ref.current) {
    observer.observe(ref.current);
  }
}, [ref]);
