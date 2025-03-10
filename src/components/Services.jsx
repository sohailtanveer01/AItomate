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
          text="AItomate unlocks the potential of AI-powered applications"
        />
        <h2 className="mb-6">For Businesses</h2>

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
                  <div className="flex gap-[1rem] max-lg:flex-wrap">
                    <div
                      className="w-[19rem] max-lg:w-full h-full px-6  border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                    >
                      <h4 className="h4 mb-4">Data Empowerment</h4>

                      <ul>
                        <li
                          className="flex items-start py-5 border-t border-n-6"
                        >
                          <p className="body-2 ml-4">
                            Leverages proprietary data to enhance operational efficiency, enabling businesses to make data-driven decisions
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="w-[19rem] max-lg:w-full h-full px-6  border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                    >
                      <h4 className="h4 mb-4">Work Flow Optimization</h4>

                      <ul>
                        <li
                          className="flex items-start py-5 border-t border-n-6"
                        >
                          <p className="body-2 ml-4">
                          Automates repetitive tasks and streamlines processes, significantly improving efficiency and reducing manual labor.                          </p>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="w-[19rem] max-lg:w-full h-full px-6  border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                    >
                      <h4 className="h4 mb-4">Strategic Achievement</h4>

                      <ul>
                        <li
                          className="flex items-start py-5 border-t border-n-6"
                        >
                          <p className="body-2 ml-4">
                          Facilitates the achievement of strategic business objectives with enhanced precision and agility, optimizing performance across all functions.                          </p>
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

        <h1 className="mt-6 mb-4">For Internal & External Users</h1>
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
                      <h4 className="h4 mb-4">Multi User Environment</h4>

                      <ul>
                        <li
                          className="flex items-start py-5 border-t border-n-6"
                        >
                          <p className="body-2 ml-4">
                          Supports a collaborative multi-user environment with fine-grained access controls, enhancing teamwork while maintaining data security.<br/>

                          Built for multi-user from the start, with fine-grained permissions and access control built-in.
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="w-[19rem] max-lg:w-full h-full px-6  border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                    >
                      <h4 className="h4 mb-4">security & Compliance</h4>

                      <ul>
                        <li
                          className="flex items-start py-5 border-t border-n-6"
                        >
                          <p className="body-2 ml-4">
                          Ensures secure compliance readiness, aligning with business and privacy compliance protocols.
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