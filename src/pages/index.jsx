import React, { useEffect } from "react"
import Button from "../components/atoms/button/button.component"
import Layout from "../components/organisms/layout/layout.component"
import SEO from "../utils/seo"

const IndexPage = () => {
  // FIX FOR VH ON MOBILE
  const changeVhVariable = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = typeof window !== "undefined" && window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    typeof document !== "undefined" &&
      document.documentElement.style.setProperty("--vh", `${vh}px`)
  }

  // Run the function to change the VH variable when the browser is resized
  useEffect(() => {
    changeVhVariable()
    window.addEventListener("resize", changeVhVariable)
    return () => window.removeEventListener("resize", changeVhVariable)
  }, [])
  return (
    <Layout>
      <p className="text-gray-600 mb-20">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia alias,
        eaque ab aliquid voluptatibus quasi eveniet nostrum blanditiis rerum
        perspiciatis velit animi dignissimos impedit labore porro necessitatibus
        laboriosam iure quae vitae enim aut consequuntur! Repellat quidem
        expedita similique? Perspiciatis alias minima iste at! Voluptatum aut
        odio numquam cupiditate obcaecati, corporis natus iste maiores repellat
        quam doloremque fuga inventore placeat praesentium veniam amet facilis
        vero exercitationem, aperiam quasi doloribus? Odio mollitia, amet optio
        fugit incidunt debitis illum. Temporibus dolorum laudantium iure fugiat
        voluptatibus! Dolorem neque nesciunt non eligendi ab quos nihil, dolor
        vero distinctio molestias quo tempora modi ipsa autem! Mollitia!
      </p>
      <p className="text-gray-600 mb-20">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia alias,
        eaque ab aliquid voluptatibus quasi eveniet nostrum blanditiis rerum
        perspiciatis velit animi dignissimos impedit labore porro necessitatibus
        laboriosam iure quae vitae enim aut consequuntur! Repellat quidem
        expedita similique? Perspiciatis alias minima iste at! Voluptatum aut
        odio numquam cupiditate obcaecati, corporis natus iste maiores repellat
        quam doloremque fuga inventore placeat praesentium veniam amet facilis
        vero exercitationem, aperiam quasi doloribus? Odio mollitia, amet optio
        fugit incidunt debitis illum. Temporibus dolorum laudantium iure fugiat
        voluptatibus! Dolorem neque nesciunt non eligendi ab quos nihil, dolor
        vero distinctio molestias quo tempora modi ipsa autem! Mollitia!
      </p>{" "}
      <p className="text-gray-600 mb-20">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia alias,
        eaque ab aliquid voluptatibus quasi eveniet nostrum blanditiis rerum
        perspiciatis velit animi dignissimos impedit labore porro necessitatibus
        laboriosam iure quae vitae enim aut consequuntur! Repellat quidem
        expedita similique? Perspiciatis alias minima iste at! Voluptatum aut
        odio numquam cupiditate obcaecati, corporis natus iste maiores repellat
        quam doloremque fuga inventore placeat praesentium veniam amet facilis
        vero exercitationem, aperiam quasi doloribus? Odio mollitia, amet optio
        fugit incidunt debitis illum. Temporibus dolorum laudantium iure fugiat
        voluptatibus! Dolorem neque nesciunt non eligendi ab quos nihil, dolor
        vero distinctio molestias quo tempora modi ipsa autem! Mollitia!
      </p>{" "}
      <p className="text-gray-600 mb-20">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia alias,
        eaque ab aliquid voluptatibus quasi eveniet nostrum blanditiis rerum
        perspiciatis velit animi dignissimos impedit labore porro necessitatibus
        laboriosam iure quae vitae enim aut consequuntur! Repellat quidem
        expedita similique? Perspiciatis alias minima iste at! Voluptatum aut
        odio numquam cupiditate obcaecati, corporis natus iste maiores repellat
        quam doloremque fuga inventore placeat praesentium veniam amet facilis
        vero exercitationem, aperiam quasi doloribus? Odio mollitia, amet optio
        fugit incidunt debitis illum. Temporibus dolorum laudantium iure fugiat
        voluptatibus! Dolorem neque nesciunt non eligendi ab quos nihil, dolor
        vero distinctio molestias quo tempora modi ipsa autem! Mollitia!
      </p>{" "}
      <p className="text-gray-600 mb-20">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia alias,
        eaque ab aliquid voluptatibus quasi eveniet nostrum blanditiis rerum
        perspiciatis velit animi dignissimos impedit labore porro necessitatibus
        laboriosam iure quae vitae enim aut consequuntur! Repellat quidem
        expedita similique? Perspiciatis alias minima iste at! Voluptatum aut
        odio numquam cupiditate obcaecati, corporis natus iste maiores repellat
        quam doloremque fuga inventore placeat praesentium veniam amet facilis
        vero exercitationem, aperiam quasi doloribus? Odio mollitia, amet optio
        fugit incidunt debitis illum. Temporibus dolorum laudantium iure fugiat
        voluptatibus! Dolorem neque nesciunt non eligendi ab quos nihil, dolor
        vero distinctio molestias quo tempora modi ipsa autem! Mollitia!
      </p>
      <Button>Hey guys</Button>
    </Layout>
  )
}

export default IndexPage
