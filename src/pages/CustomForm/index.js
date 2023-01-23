import React from "react";

import { Img, Input, Stack, Text } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const CustomFormPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex flex-col items-start justify-end w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-[20px] w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start max-w-[1289px] ml-[auto] mr-[auto] md:pl-[20px] md:pr-[20px] w-[100%]">
              <Img
                src="images/img_frame1.svg"
                className="h-[41px] w-[auto]"
                alt="FrameOne"
              />
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                wrapClassName="flex gap-[12px] md:ml-[0] md:mt-[0] md:w-[100%] ml-[97px] my-[6px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[406px]"
                name="InputField"
                placeholder="Search Items, Customer etc"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer mr-[12px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#bac1ce"
                      className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
                shape="srcRoundedBorder6"
                size="smSrc"
                variant="srcOutlineBluegray300"
              ></Input>
              <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col font-opensans h-[56px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[480px] p-[8px] rounded-radius50 w-[56px]">
                <Stack className="h-[35px] mb-[4px] relative w-[36px]">
                  <Img
                    src="images/img_notification.svg"
                    className="absolute bottom-[0] h-[32px] left-[0] w-[32px]"
                    alt="notification"
                  />
                  <Text
                    className="absolute bg-red_700 border border-bluegray_50 border-solid h-[18px] pb-[5px] pt-[2px] px-[5px] right-[0] rounded-radius50 text-left text-white_A700 top-[0] w-[18px]"
                    as="h3"
                    variant="h3"
                  >
                    2
                  </Text>
                </Stack>
              </div>
              <Img
                src="images/img_contrast.svg"
                className="h-[56px] md:ml-[0] sm:ml-[0] ml-[24px] w-[56px]"
                alt="contrast"
              />
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between max-w-[1086px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <aside className="md:hidden sm:hidden w-[28%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-end p-[5px] w-[100%]">
                  <div className="flex flex-col gap-[375px] md:gap-[40px] sm:gap-[40px] items-center justify-start mt-[19px] md:w-[100%] sm:w-[100%] w-[87%]">
                    <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start pr-[16px] py-[16px] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] sm:w-[100%] w-[56%]">
                          <Img
                            src="images/img_settings.svg"
                            className="h-[24px] ml-[7px] w-[24px]"
                            alt="settings"
                          />
                          <Text
                            className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Dashboard
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start p-[8px] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start my-[8px] md:w-[100%] sm:w-[100%] w-[33%]">
                          <Img
                            src="images/img_user.svg"
                            className="h-[24px] w-[24px]"
                            alt="user"
                          />
                          <Text
                            className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Users
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start p-[8px] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-end justify-start my-[8px] md:w-[100%] sm:w-[100%] w-[49%]">
                          <Img
                            src="images/img_grid.svg"
                            className="h-[24px] w-[24px]"
                            alt="grid"
                          />
                          <Text
                            className="font-normal mt-[6px] not-italic text-bluegray_700 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Categories
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start p-[8px] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start my-[8px] md:w-[100%] sm:w-[100%] w-[32%]">
                          <Img
                            src="images/img_edit.svg"
                            className="h-[24px] w-[24px]"
                            alt="edit"
                          />
                          <Text
                            className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Items
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start p-[8px] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start my-[8px] md:w-[100%] sm:w-[100%] w-[36%]">
                          <Img
                            src="images/img_bag.svg"
                            className="h-[24px] w-[24px]"
                            alt="bag"
                          />
                          <Text
                            className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Orders
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start p-[8px] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-end justify-start my-[8px] md:w-[100%] sm:w-[100%] w-[28%]">
                          <Img
                            src="images/img_clock.svg"
                            className="h-[24px] w-[24px]"
                            alt="clock"
                          />
                          <Text
                            className="font-normal mt-[5px] not-italic text-bluegray_700 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Blog
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start p-[8px] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start my-[8px] md:w-[100%] sm:w-[100%] w-[55%]">
                          <Img
                            src="images/img_notification.svg"
                            className="h-[24px] w-[24px]"
                            alt="notification One"
                          />
                          <Text
                            className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Notifications
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start p-[8px] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-end justify-start my-[8px] md:w-[100%] sm:w-[100%] w-[41%]">
                          <Img
                            src="images/img_settings_bluegray_700.svg"
                            className="h-[24px] w-[24px]"
                            alt="settings One"
                          />
                          <Text
                            className="font-normal mt-[6px] not-italic text-bluegray_700 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Settings
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-opensans items-start justify-start p-[8px] w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-start my-[8px] md:w-[100%] sm:w-[100%] w-[29%]">
                        <Img
                          src="images/img_question.svg"
                          className="h-[24px] w-[24px]"
                          alt="question"
                        />
                        <Text
                          className="font-semibold text-bluegray_700 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Help
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[48%]">
              <Stack className="h-[879px] relative w-[100%]">
                <div className="flex flex-col gap-[4px] items-center justify-start mb-[-8px] mx-[auto] sm:w-[100%] w-[512px] z-[1]">
                  <div className="flex flex-col items-start justify-start pr-[6px] pt-[6px] self-stretch w-[100%]">
                    <Text
                      className="not-italic text-bluegray_900 text-left w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      quel type de contenu souhaitez vous générer ?
                    </Text>
                  </div>
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                    wrapClassName="md:h-[auto] self-stretch sm:h-[auto] w-[100%]"
                    name="InputField Two"
                    placeholder="typer de contenu"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-end mt-[auto] mx-[auto] pt-[18px] w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start pr-[6px] pt-[6px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        quel est l’objectif de votre contenu ?
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[4px] w-[100%]">
                      <Input
                        className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                        wrapClassName="md:h-[auto] sm:h-[auto] sm:w-[100%] w-[512px]"
                        name="InputField One"
                        placeholder="objectif"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineBluegray100"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[10px] w-[100%]">
                    <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        de quoi souhaitez vous parler dans ce contenu ?
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[4px] w-[100%]">
                      <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col h-[52px] md:h-[auto] sm:h-[auto] items-start justify-center px-[12px] rounded-radius8 sm:w-[100%] w-[512px]">
                        <Input
                          className="font-normal sm:mx-[0] not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                          wrapClassName="sm:mx-[0] w-[100%]"
                          type="email"
                          name="InputPlaceholder"
                          placeholder="Enter Your Email Id"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[10px] w-[100%]">
                    <div className="flex flex-col items-start justify-start pr-[6px] pt-[6px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        à qui s’adresse ce contenu ?{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[4px] w-[100%]">
                      <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col h-[52px] md:h-[auto] sm:h-[auto] items-start justify-center px-[12px] rounded-radius8 sm:w-[100%] w-[512px]">
                        <Input
                          className="font-normal sm:mx-[0] not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                          wrapClassName="sm:mx-[0] w-[100%]"
                          type="number"
                          name="InputPlaceholder One"
                          placeholder="Enter Your Phone Number"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start pr-[6px] pt-[6px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        quelques mots clefs{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[4px] w-[100%]">
                      <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col h-[52px] md:h-[auto] sm:h-[auto] items-start justify-center px-[12px] rounded-radius8 sm:w-[100%] w-[512px]">
                        <Input
                          className="font-normal sm:mx-[0] not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                          wrapClassName="sm:mx-[0] w-[100%]"
                          type="number"
                          name="InputPlaceholder Two"
                          placeholder="Enter Your Phone Number"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[10px] w-[100%]">
                    <div className="flex flex-col items-start justify-start pr-[6px] pt-[6px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        style d’écriture ?
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[4px] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col h-[52px] md:h-[auto] sm:h-[auto] items-start justify-center px-[12px] rounded-radius8 sm:w-[100%] w-[512px]">
                          <Input
                            className="font-normal sm:mx-[0] not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                            wrapClassName="sm:mx-[0] w-[100%]"
                            type="number"
                            name="InputPlaceholder Three"
                            placeholder="Enter Your Phone Number"
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        langue ?
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[4px] w-[100%]">
                      <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-start justify-center px-[12px] rounded-radius8 sm:w-[100%] w-[512px]">
                        <Input
                          className="font-normal sm:mx-[0] not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                          wrapClassName="sm:mx-[0] w-[100%]"
                          type="number"
                          name="InputPlaceholder Four"
                          placeholder="Enter Your Phone Number"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-end pr-[4px] py-[4px] w-[100%]">
                        <Text
                          className="not-italic text-bluegray_900 text-left w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          taille ?
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[4px] pb-[5px] w-[100%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col h-[19px] md:h-[auto] sm:h-[auto] items-start justify-center px-[12px] rounded-radius8 sm:w-[100%] w-[512px]">
                          <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px] md:self-stretch sm:self-stretch md:w-[100%] sm:w-[100%] w-[101%]">
                            <Text
                              className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                              as="h2"
                              variant="h2"
                            >
                              objectif
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start pr-[6px] pt-[6px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        frequence des mots
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[4px] pb-[5px] w-[100%]">
                      <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col h-[19px] md:h-[auto] sm:h-[auto] items-start justify-center px-[12px] rounded-radius8 sm:w-[100%] w-[512px]">
                        <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px] md:self-stretch sm:self-stretch md:w-[100%] sm:w-[100%] w-[101%]">
                          <Text
                            className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            objectif
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        temperature
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[4px] pb-[5px] w-[100%]">
                      <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col h-[19px] md:h-[auto] sm:h-[auto] items-start justify-center px-[12px] rounded-radius8 sm:w-[100%] w-[512px]">
                        <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px] md:self-stretch sm:self-stretch md:w-[100%] sm:w-[100%] w-[101%]">
                          <Text
                            className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            objectif
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        top_p
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[4px] pb-[5px] w-[100%]">
                      <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col h-[19px] md:h-[auto] sm:h-[auto] items-start justify-center px-[12px] rounded-radius8 sm:w-[100%] w-[512px]">
                        <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px] md:self-stretch sm:self-stretch md:w-[100%] sm:w-[100%] w-[101%]">
                          <Text
                            className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            objectif
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="bg-blue_A701 font-normal h-[32px] justify-center mt-[25px] not-italic px-[18px] py-[12px] rounded-radius6 text-left text-white_A700 w-[512px]"
                    as="h2"
                    variant="h2"
                  >
                    Submit
                  </Text>
                </div>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomFormPage;
