import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { Gradient } from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="AI made for Businesses & Users."
          text="unlock the potential of AI-powered automation systems"
        />
        <h2 className="mb-6">The Process of AI Automation</h2>

        <div className="relative">
          <div className="flex gap-[1rem] max-lg:flex-wrap">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <Section className="overflow-hidden" id="businesses">
              <div className="container relative z-2">
                <div className="relative">
                  <div className="flex gap-[1rem] max-lg:flex-wrap relative">
                    {/* Connecting lines for desktop */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-n-6/50 -translate-y-1/2 hidden lg:block" />
                    
                    <div
                      className="w-[19rem] max-lg:w-full h-full px-6 relative backdrop-blur-sm bg-n-8/50 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                    >
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-color-2 flex items-center justify-center text-n-1 font-bold shadow-lg">1</div>
                      <h4 className="h4 mb-4">Analysis</h4>

                      <ul>
                        <li
                          className="flex items-start py-5 border-t border-n-6"
                        >
                          <p className="body-2 ml-4">
                            We analyze your business processes, pain points and identify the areas that can be automated over a scheduled call.
                            <br/>
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="w-[19rem] max-lg:w-full h-full px-6 relative backdrop-blur-sm bg-n-8/50 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                    >
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-color-1 flex items-center justify-center text-n-1 font-bold shadow-lg">2</div>
                      <h4 className="h4 mb-4">Building</h4>

                      <ul>
                        <li
                          className="flex items-start py-5 border-t border-n-6"
                        >
                          <p className="body-2 ml-4">
                          We provide a detailed plan of action with a timeline and start to build the automation for you.                         
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="w-[19rem] max-lg:w-full h-full px-6 relative backdrop-blur-sm bg-n-8/50 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                    >
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-color-3 flex items-center justify-center text-n-1 font-bold shadow-lg">3</div>
                      <h4 className="h4 mb-4">Implementation</h4>

                      <ul>
                        <li
                          className="flex items-start py-5 border-t border-n-6"
                        >
                          <p className="body-2 ml-4">We implement the automation and will manage the automation for you.</p>
                        </li>
                      </ul>
                    </div>

                    {/* Mobile connecting lines */}
                    <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-[2px] bg-n-6/50 -translate-x-1/2" />
                  </div>
                </div>
              </div>
            </Section>
          </div>

          <Gradient />
        </div>

        <h1 className="mt-6 mb-4">Bonus Features</h1>
        <div className="relative">
          <div className="flex gap-[1rem] max-lg:flex-wrap">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service3}
              />
            </div>

            <Section className="overflow-hidden" id="users">
              <div className="container relative z-2">
                <div className="relative">
                  <div className="flex gap-[1rem] max-lg:flex-wrap">
                    <div
                      className="w-[19rem] max-lg:w-full h-full px-6  border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                    >
                      <h4 className="h4 mb-4">AI Video Generation</h4>

                      <ul>
                        <li
                          className="flex items-start py-5 border-t border-n-6"
                        >
                          <p className="body-2 ml-4">
                          We use AI to generate videos to promote your business on social media.
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="w-[19rem] max-lg:w-full h-full px-6  border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                    >
                      <h4 className="h4 mb-4">AI Voice Agents</h4>

                      <ul>
                        <li
                          className="flex items-start py-5 border-t border-n-6"
                        >
                          <p className="body-2 ml-4">
                          AI voice agents to handle customer service and sales calls. our agents can handel about 10000 calls per day and knows every detail about your business.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;