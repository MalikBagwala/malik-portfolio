import React from "react"
import Input from "../../atoms/input/input.component"
import Section from "../../templates/section/section.component"

const Contact = () => {
  return (
    <Section white title="contact" subtitle="get in touch">
      <div className="flex">
        <div className="w-1/2">
          <h6>Name</h6>
        </div>
        <div className="w-1/2" onSubmit={() => {}}>
          <form action="">
            <Input placeholder="Name" name="name" label="Name" />
            <Input placeholder="Name" name="name" label="Name" />
            <Input placeholder="Name" name="name" label="Name" />
          </form>
        </div>
      </div>
    </Section>
  )
}

export default Contact
