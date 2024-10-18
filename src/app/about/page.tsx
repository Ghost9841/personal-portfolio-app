const About = () => {
  const services = [
    { id: '01', title: 'Web Development', description: 'Description here' },
    { id: '02', title: 'UI/UX Design', description: 'Description here' },
    { id: '03', title: 'Networking (ISP Operator)', description: 'Description here' },
    { id: '04', title: 'Chess Nepal Owner', description: 'Description here' },
  ];

  return (
    <section id="about" className="py-16">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} className="p-6 shadow-md border rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
