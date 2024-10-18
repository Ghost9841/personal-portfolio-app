const Contact = () => {
    return (
      <section id="contact" className="py-16">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border p-2 rounded-md" />
            <input type="text" placeholder="Last Name" className="border p-2 rounded-md" />
          </div>
          <input type="email" placeholder="Email Address" className="border p-2 w-full rounded-md" />
          <input type="text" placeholder="Phone Number" className="border p-2 w-full rounded-md" />
          <textarea placeholder="Type your message here" className="border p-2 w-full rounded-md"></textarea>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
        </form>
        <div className="mt-8">
          <p>Phone: 9860104336</p>
          <p>Email: asubedi778@gmail.com</p>
          <p>Address: Thankot Chandragiri, Kathmandu</p>
        </div>
      </section>
    );
  };
  
  export default Contact;