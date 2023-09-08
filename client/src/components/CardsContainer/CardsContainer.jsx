import Card from "../Card/Card"
import style from './CardsContainer.module.css'

import { useEffect, useState } from "react";

export default function CardsContainer() {
   const characters = [
      {
        "id": 1,
        "driverRef": "hamilton",
        "number": 44,
        "code": "HAM",
        "name": { "forename": "Lewis", "surname": "Hamilton" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=52060566"
        },
        "dob": "1985-01-07",
        "nationality": "British",
        "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
        "teams": "McLaren, Mercedes",
        "description": "Sir Lewis Carl Davidson Hamilton MBE HonFREng (born 7 January 1985) is a British racing driver currently competing in Formula One, driving for Mercedes-AMG Petronas Formula One Team. In Formula One, Hamilton has won a joint-record seven World Drivers' Championship titles (tied with Michael Schumacher), and holds the records for the most wins (103), pole positions (103), and podium finishes (191), among many others. He is statistically considered as the most successful driver in Formula One history."
      },
      {
        "id": 2,
        "driverRef": "heidfeld",
        "number": "\\N",
        "code": "HEI",
        "name": { "forename": "Nick", "surname": "Heidfeld" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Nick_Heidfeld_Goodwood_Festival_of_Speed_2019_%2848242681251%29.jpg/330px-Nick_Heidfeld_Goodwood_Festival_of_Speed_2019_%2848242681251%29.jpg",
          "imageby": "By https://www.flickr.com/photos/69527563@N05/ - https://www.flickr.com/photos/69527563@N05/48242681251/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=80386033"
        },
        "dob": "1977-05-10",
        "nationality": "German",
        "url": "https://en.wikipedia.org/wiki/Nick_Heidfeld",
        "teams": "Prost, Sauber, Jordan,Williams,BMW Sauber,Renault",
        "description": "Nick Lars Heidfeld (born 10 May 1977) is a German professional racing driver. Despite scoring regular podium finishes in 2005 with Williams, and in 2007 and 2008 with BMW Sauber, Heidfeld never won a race after debuting in Formula One in 2000. Heidfeld currently holds two Formula One records; most podium finishes without a Grand Prix win, and the most second-place finishes without a wi. In 2011, Heidfeld raced in Formula One for the Renault team as a replacement for the injured Robert Kubica, his former BMW Sauber teammate,before being replaced by Bruno Senna. He last drove for the Rebellion Racing team in the FIA World Endurance Championship and for Mahindra Racing Formula E Team in Formula E."
      },
      {
        "id": 3,
        "driverRef": "rosberg",
        "number": 6,
        "code": "ROS",
        "name": { "forename": "Nico", "surname": "Rosberg" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nico_Rosberg_2016.jpg/330px-Nico_Rosberg_2016.jpg",
          "imageby": "By Sven Mandel - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=63355783"
        },
        "dob": "1985-06-27",
        "nationality": "German",
        "url": "http://en.wikipedia.org/wiki/Nico_Rosberg",
        "teams": "Williams, Mercedes",
        "description": "Nico Erik Rosberg (born 27 June 1985) is a German-Finnish former professional racing driver. He competed in Formula One from 2006 to 2016, winning the World Drivers' Championship in 2016 with Mercedes-AMG Petronas Motorsport. The only child of Finnish 1982 Formula One World Champion Keke Rosberg and his German wife Sina Rosberg, he was raised primarily in the Principality of Monaco."
      },
      {
        "id": 4,
        "driverRef": "alonso",
        "number": 14,
        "code": "ALO",
        "name": { "forename": "Fernando", "surname": "Alonso" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Alonso_2016.jpg/360px-Alonso_2016.jpg",
          "imageby": "By Box Repsol | Flickr - https://www.flickr.com/photos/box_repsol/26877535660/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=53803565"
        },
        "dob": "1981-07-29",
        "nationality": "Spanish",
        "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
        "teams": "Minardi, Renault, McLaren, Ferrari, Alpine",
        "description": "Fernando Alonso Díaz is a Spanish racing driver currently competing for Aston Martin in Formula One. He won the series' World Drivers' Championship in 2005 and 2006 with Renault, and has also driven for McLaren, Ferrari, and Minardi. With Toyota, Alonso won the 24 Hours of Le Mans twice, in 2018 and 2019, and the FIA World Endurance Championship in 2018–19. He also won the 24 Hours of Daytona with Wayne Taylor Racing in 2019."
      },
      {
        "id": 5,
        "driverRef": "kovalainen",
        "number": "\\N",
        "code": "KOV",
        "name": { "forename": "Heikki", "surname": "Kovalainen" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/2/29/Effect_20190609_091716.jpg",
          "imageby": "By SF-R - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=79563828"
        },
        "dob": "1981-10-19",
        "nationality": "Finnish",
        "url": "http://en.wikipedia.org/wiki/Heikki_Kovalainen",
        "teams": "Renault, McLaren, Lotus, Caterham, Lotus",
        "description": "Heikki Johannes Kovalainen; is a Finnish racing driver competing in the Japan Rally Championship for Rally Team AICELLO. He raced in Formula One between 2007 and 2013 for the Renault, McLaren, Team Lotus, Caterham and Lotus F1 teams, scoring a single victory at the 2008 Hungarian Grand Prix. After leaving Formula One, he raced in the Japanese Super GT series between 2015 and 2021, where he won the championship in 2016."
      },
      {
        "id": 6,
        "driverRef": "nakajima",
        "number": "\\N",
        "code": "NAK",
        "name": { "forename": "Kazuki", "surname": "Nakajima" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Kazuki_Nakajima_2012_WEC_Fuji.jpg/330px-Kazuki_Nakajima_2012_WEC_Fuji.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=22170228"
        },
        "dob": "1985-01-11",
        "nationality": "Japanese",
        "url": "http://en.wikipedia.org/wiki/Kazuki_Nakajima",
        "teams": "Williams",
        "description": "Kazuki Nakajima is a retired Japanese professional racing driver who drove in Formula One for the Williams-Toyota team from 2007 to 2009. In 2012 and 2014, he won the Super Formula Championship driving for TOM'S. Racing for Toyota Gazoo Racing, he won the 2018, 2019 and 2020 24 Hours of Le Mans, as well as the 2018–19 World Endurance Championship along with team-mates Fernando Alonso and Sébastien Buemi. He is the second FIA world champion from Japan after Toshi Arai."
      },
      {
        "id": 7,
        "driverRef": "bourdais",
        "number": "\\N",
        "code": "BOU",
        "name": { "forename": "Sébastien", "surname": "Bourdais" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sebastien_Bourdais_in_2021_%2851221641988%29_%28cropped%29.jpg/1024px-Sebastien_Bourdais_in_2021_%2851221641988%29_%28cropped%29.jpg",
          "imageby": "De Zach Catanzareti Photo - sebastien bourdais tony stewart, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=106663586"
        },
        "dob": "1979-02-28",
        "nationality": "French",
        "url": "http://en.wikipedia.org/wiki/S%C3%A9bastien_Bourdais",
        "teams": "Toro Rosso",
        "description": "Sébastien Olivier Bourdais is a French professional racing driver. He is one of the most successful drivers in the history of American open-wheel car racing, having won 37 races. He won four successive championships under Champ Car World Series sanction from 2004 to 2007. He drove in Formula One for the Toro Rosso team during 2008, and the start of the 2009 season, returned to America in the united IndyCar Series in 2011, and has raced sports cars throughout his career, winning his home race, the 24 Hours of Le Mans in the GTE-Pro class in 2016. He last competed in the NTT IndyCar Series in 2021, driving the No. 14 car for A. J. Foyt Racing."
      },
      {
        "id": 8,
        "driverRef": "raikkonen",
        "number": 7,
        "code": "RAI",
        "name": { "forename": "Kimi", "surname": "Räikkönen" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/f/ff/F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg",
          "imageby": "By XaviYuahanda - Own work, CC BY-SA 4.0"
        },
        "dob": "1979-10-17",
        "nationality": "Finnish",
        "url": "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
        "teams": "Sauber, McLaren, Ferrari, Lotus, Alfa Romeo",
        "description": "Kimi-Matias Räikkönen, nicknamed The Iceman, is a Finnish racing driver who competed in Formula One between 2001 and 2021 for Sauber, McLaren, Ferrari, Lotus, and Alfa Romeo. Räikkönen won the 2007 Formula One World Championship while driving for Ferrari; he also managed to finish second overall twice and third three times. Räikkönen is the most successful Finnish Formula One driver by several metrics,[a] and has the fifth-most podium finishes, third-most fastest laps, and second-most race starts in Formula One history. He is known for his reserved personality and reluctance to participate in public relations."
      },
      {
        "id": 9,
        "driverRef": "kubica",
        "number": 88,
        "code": "KUB",
        "name": { "forename": "Robert", "surname": "Kubica" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2019_Formula_One_tests_Barcelona%2C_Kubica_%2832309897777%29.jpg/800px-2019_Formula_One_tests_Barcelona%2C_Kubica_%2832309897777%29.jpg",
          "imageby": "By Marc Alvarado - https://www.flickr.com/photos/170206857@N06/32309897777/, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=77013331"
        },
        "dob": "1984-12-07",
        "nationality": "Polish",
        "url": "http://en.wikipedia.org/wiki/Robert_Kubica",
        "teams": "BMW Sauber, Renault, Williams, Alfa Romeo Racing",
        "description": "Robert Józef Kubica is a Polish racing and rally driver. He was the first and, as of 2023, the only Polish racing driver to compete in Formula One. Between 2006 and 2009 he drove for the BMW Sauber F1 team, promoted from test driver to race driver during 2006. In June 2008, Kubica took his maiden and only Formula One victory at the Canadian Grand Prix. That season he led the championship at one stage, before finishing fourth overall, his best career position. Kubica drove for Renault in 2010 and was set to remain with the team in 2011. Several years later Kubica confirmed he had signed a pre-contract for the 2012 season with Ferrari, a move that was eventually cancelled by his devastating rally crash in early 2011.Kubica returned to racing in September 2012, winning a minor rally in Italy.Kubica was named one of The Men of the Year 2012 by Top Gear magazine for his return to auto racing. In 2013, he drove for Citroën in the European and World Rally-2 Championships.He went on to win the inaugural WRC-2 title, and moved to the WRC championship full-time in 2014, driving a Ford Fiesta RS WRC prepared by M-Sport.On 16 January 2018, it was announced that Kubica would become the reserve driver of Williams for the 2018 season.On 22 November 2018, Kubica was announced as a Williams race driver for the 2019 Formula One season.He left the Williams team at the end of 2019, moving across to the Deutsche Tourenwagen Masters,while maintaining a Formula One presence as reserve and test driver for Alfa Romeo. He has made several appearances during practice sessions in his role as test driver, and he replaced Kimi Räikkönen at the Dutch and Italian Grands Prix in 2021"
      },
      {
        "id": 10,
        "driverRef": "glock",
        "number": "\\N",
        "code": "GLO",
        "name": { "forename": "Timo", "surname": "Glock" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Timo_Glock_Canada_2011-Cropped.jpg/800px-Timo_Glock_Canada_2011-Cropped.jpg",
          "imageby": "By ph-stop - https://www.flickr.com/photos/ph-stop/5817328106/, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=19979628"
        },
        "dob": "1982-03-18",
        "nationality": "German",
        "url": "http://en.wikipedia.org/wiki/Timo_Glock",
        "teams": "Jordan, Toyota, Virgin, Marussia",
        "description": "Timo Glock is a German professional racing driver, and BMW Motorsport works driver. He raced in Formula One for the Jordan, Toyota, Virgin Racing and Marussia F1 teams. He finished 10th in the Drivers' Championship in both 2008 and 2009, scoring three podium finishes. After leaving Formula One in 2013, Glock became a works driver for BMW in the Deutsche Tourenwagen Masters, driving for BMW Team MTEK, and achieved his first DTM podium at the Red Bull Ring, and a first win at the season finale at the Hockenheimring."
      },
      {
        "id": 11,
        "driverRef": "sato",
        "number": "\\N",
        "code": "SAT",
        "name": { "forename": "Takuma", "surname": "Sato" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Takuma_Sato_%282021%29.jpg/800px-Takuma_Sato_%282021%29.jpg",
          "imageby": "By Wolkenjaeger - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110568755"
        },
        "dob": "1977-01-28",
        "nationality": "Japanese",
        "url": "http://en.wikipedia.org/wiki/Takuma_Sato",
        "teams": "Jordan, BAR, Super Aguri",
        "description": "Takuma Sato, nicknamed: Taku, is a Japanese professional racing driver. He competes part-time in the IndyCar Series, driving the No. 11 Honda for Chip Ganassi Racing. Sato is a two time winner of the Indianapolis 500, having won the event in 2017 and 2020. He was the first Asian driver to win the Indianapolis 500, and the twentieth driver to win the race more than once. Before winning the Indianapolis 500, Sato became the first Japanese-born driver to win an IndyCar Series race when he won the 2013 Grand Prix of Long Beach. Sato raced full-time in the IndyCar Series from 2010 until 2022 for KV Racing Technology, Rahal Letterman Lanigan Racing, A. J. Foyt Enterprises, Andretti Autosport, and Dale Coyne Racing, all with Honda engines. He competed in Formula One from 2002 to 2008 for the Honda-powered Jordan, BAR and Super Aguri teams, scoring 44 points overall, and a single podium which was at the 2004 United States Grand Prix. His 8th-place finish in the 2004 Formula One World Drivers' Championship is the best-ever result for a Japanese driver in the series. Sato has become known among fans and media for his motto no attack, no chance with regards to his racing style."
      },
      {
        "id": 12,
        "driverRef": "piquet_jr",
        "number": "\\N",
        "code": "PIQ",
        "name": { "forename": "Nelson", "surname": "Piquet Jr." },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Piquet_Jr._2015.jpg",
          "imageby": "By Andreas Bakkerud - http://www.mynewsdesk.com/no/andreasbakkerud/images/andreas-bakkerud-tok-seg-til-x-games-finalen-439633, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=45295644"
        },
        "dob": "1985-07-25",
        "nationality": "Brazilian",
        "url": "http://en.wikipedia.org/wiki/Nelson_Piquet,_Jr.",
        "teams": "Renault",
        "description": "Nelson Angelo Tamsma Piquet Souto Maior, also known as Nelson Piquet Junior or Nelsinho Piquet, is a Brazilian stock car racing driver and former Formula One and Formula E driver where he was champion in the 2014–15 season. He currently competes full-time in the Brazilian Stock Car Pro Series, driving the No. 33 Toyota Corolla E210 for Motul TMG Racing.He also races a Rebellion R-One LMP1 in the FIA World Endurance Championship. The son of three-time Formula One world champion Nelson Piquet, he was signed as test driver for Renault Formula One team for the 2007 season, and was promoted to the race team for 2008, before being dropped midway through the 2009 season.[3] After losing his drive, it emerged that he had, under instruction from senior members of the team, crashed deliberately at the 2008 Singapore Grand Prix to help his teammate, Fernando Alonso, win the race. The resulting scandal became one of the most significant in motor sport history, and ultimately saw a permanent end to Piquet Junior's career in Formula 1. Piquet also finished runner-up in the 2006 GP2 Series, fourth in the 2014 Global RallyCross Championship, and seventh in the 2012 NASCAR Truck Series."
      },
      {
        "id": 13,
        "driverRef": "massa",
        "number": 19,
        "code": "MAS",
        "name": { "forename": "Felipe", "surname": "Massa" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Felipe_Massa_Le_Mans_Classic_2018_%28cropped%29.jpg/800px-Felipe_Massa_Le_Mans_Classic_2018_%28cropped%29.jpg",
          "imageby": "By Y.Leclercq - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=77068897"
        },
        "dob": "1981-04-25",
        "nationality": "Brazilian",
        "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
        "teams": "Sauber, Ferrari, Williams",
        "description": "Felipe Massa is a Brazilian racing driver. He competed in 15 seasons of Formula One between 2002 and 2017, where he scored 11 Grand Prix victories, 41 podiums and finished as championship runner-up in 2008 by one point. He currently competes full-time in the Brazilian Stock Car Pro Series, driving the No. 19 Chevrolet Cruze for Lubrax Podium.Massa started his career in go-karting from the age of eight continuing in national and regional championships for seven years. He moved into Formula Chevrolet and claimed the championship. He moved in Italian Formula Renault in 2000 and won the title along with the European championship. He went into Euro Formula 3000 taking the championship in 2001.He started his Formula One career with Sauber before joining Scuderia Ferrari as a test driver for 2003. He returned to Sauber for 2004 and 2005 before rejoining Ferrari where he won two races in 2006 including his home Grand Prix becoming the first Brazilian since Ayrton Senna to win the Brazilian Grand Prix. He won three races in 2007, finishing 4th in the Drivers' Championship. He finished second in the 2008 Drivers' World Championship after a long title battle with Lewis Hamilton, winning six races to Hamilton's five. At the 2009 Hungarian Grand Prix, he was injured by a suspension spring off the Brawn GP car of Rubens Barrichello. He was forced to miss the rest of the season but returned in 2010 during which he briefly led the championship. He suffered a dip in form in 2011 scoring no podiums but consistently scoring points. He contributed to Ferrari's Constructors' Championships in 2007 and 2008 and was under contract to race for the team until the end of the 2013 season.On 10 September 2013, he confirmed he would be leaving Ferrari at the end of the 2013 season. He replaced Pastor Maldonado alongside Valtteri Bottas at Williams from 2014.Massa announced that he would retire from Formula One at the end of the 2016 season.However, the abrupt retirement of 2016 Formula One Champion Nico Rosberg from Mercedes precipitated the late move of Valtteri Bottas from Williams to Mercedes, leaving a late vacancy at Williams. Massa subsequently postponed his retirement, returning to Williams to partner rookie Lance Stroll for the 2017 season.[4] On 4 November 2017, Massa confirmed that he would be retiring from Formula One at the end of the 2017 season.Since retirement from Formula One, Massa has pursued a career in the FIA's all electric series Formula E. He retired from Formula E at the end of the 2019-20 Championship. He then joined the 2021 season of the Stock Car Brasil series."
      },
      {
        "id": 14,
        "driverRef": "coulthard",
        "number": "\\N",
        "code": "COU",
        "name": { "forename": "David", "surname": "Coulthard" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/David_Coulthard_Champions_for_Charity_2022_%28cropped%29.jpg/330px-David_Coulthard_Champions_for_Charity_2022_%28cropped%29.jpg",
          "imageby": "By Sven Mandel - Sven Mandel, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=123036859"
        },
        "dob": "1971-03-27",
        "nationality": "British",
        "url": "http://en.wikipedia.org/wiki/David_Coulthard",
        "teams": "Williams, McLaren, Red Bull",
        "description": "David Marshall Coulthard MBE is a British former racing driver from Scotland, later turned presenter, commentator and journalist. Nicknamed 'DC', he competed in 15 seasons of Formula One between 1994 and 2008, taking 13 Grand Prix victories and 62 podium finishes. He was runner-up in the 2001 championship, driving for McLaren. Coulthard began karting at the age of eleven and achieved early success before progressing to car racing in the British Formula Ford Championship and the Formula 3000 series. He first drove in Formula One with Williams in the 1994 season succeeding the late Ayrton Senna. The following year he won his first Grand Prix in Portugal, and then for the 1996 season he moved to McLaren. After winning two races in the 1997 season, he finished 3rd in the World Drivers' Championship in the 1998 season. He won five races during 1999 and 2000 before finishing 2nd in the Drivers' Championship to Michael Schumacher in 2001. Two more victories followed between 2002 and 2003 before he left McLaren at the end of 2004. He moved to Red Bull in 2005 and secured their first podium a year later. Coulthard retired from Formula One racing at the end of 2008. After retiring from Formula One, Coulthard continued working with Red Bull as a consultant and joined the BBC as a commentator and pundit for their coverage of Formula One. He returned to active motorsports in 2010 joining Mücke Motorsport in DTM, the Deutsche Tourenwagen Masters (German Touring Car Masters) and retired at the end of 2012. Coulthard has also participated in the Race of Champions, finishing runner-up in the Drivers' Cup in 2008, and winning the competition in 2014 and 2018. Since 2016 he has worked as a commentator and analyst for Channel 4 after they took over the BBC's terrestrial television rights. In 2019, he was elected president of the British Racing Drivers' Club"
      },
      {
        "id": 15,
        "driverRef": "trulli",
        "number": "\\N",
        "code": "TRU",
        "name": { "forename": "Jarno", "surname": "Trulli" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Jarno-Trulli-2014-cropped.jpg/1024px-Jarno-Trulli-2014-cropped.jpg",
          "imageby": "By 12. Internationale Sportnacht Davos from Davos, Schweiz - 12. Internationale Sportnacht Davos 2014, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=113876789"
        },
        "dob": "1974-07-13",
        "nationality": "Italian",
        "url": "http://en.wikipedia.org/wiki/Jarno_Trulli",
        "teams": "Minardi, Prost, Jordan, Renault, Toyota, Lotus",
        "description": "Jarno Trulli is an Italian racing driver. He regularly competed in Formula One from 1997 to 2011, driving for Minardi, Prost, Jordan, Renault, Toyota, Lotus Racing and Team Lotus. His best result in the World Drivers' Championship (WDC) was sixth place in 2004; this was also the year in which he scored the only win of his Formula One career at the 2004 Monaco Grand Prix. Throughout his Formula One career, Trulli was renowned for his skill in qualifying, regularly achieving far better grid positions than rivals with superior cars to his own. He was also known for his defensive driving style which allowed him to successfully hold off quicker drivers, sometimes for an entire race. The combination of being able to achieve high grid positions in comparatively slow cars and his ability to hold off faster drivers would often result in a line of vehicles forming behind him during a race, which was commonly referred to as the 'Trulli Train' by commentators, fans and journalists. Trulli was slated to compete in the 2012 Formula One season, but retired before the season began. In 2014–15 he competed in the inaugural season of the FIA Formula E Championship, driving for Trulli GP, a team he founded. He is the father of racing driver Enzo Trulli"
      },
      {
        "id": 16,
        "driverRef": "sutil",
        "number": 99,
        "code": "SUT",
        "name": { "forename": "Adrian", "surname": "Sutil" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Adrian_Sutil.jpg/800px-Adrian_Sutil.jpg",
          "imageby": "By Nic Redhead - Flickr: Adrian Sutil, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=16588831"
        },
        "dob": "1983-01-11",
        "nationality": "German",
        "url": "http://en.wikipedia.org/wiki/Adrian_Sutil",
        "teams": "Spyker, Force India, Sauber"
      },
      {
        "id": 17,
        "driverRef": "webber",
        "number": "\\N",
        "code": "WEB",
        "name": { "forename": "Mark", "surname": "Webber" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Mark_Webber_2017_Malaysian_GP_podium.jpg/800px-Mark_Webber_2017_Malaysian_GP_podium.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=79072288"
        },
        "dob": "1976-08-27",
        "nationality": "Australian",
        "url": "http://en.wikipedia.org/wiki/Mark_Webber",
        "teams": "Porsche, Mercedes AMG"
      },
      {
        "id": 18,
        "driverRef": "button",
        "number": 22,
        "code": "BUT",
        "name": { "forename": "Jenson", "surname": "Button" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Jenson_Button_Bahrain_2012_%28crop%29.jpg/330px-Jenson_Button_Bahrain_2012_%28crop%29.jpg",
          "imageby": "By Ryan Bayona - https://commons.wikimedia.org/wiki/File:Jenson_Button_bahrain_2012.jpg, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=97883671"
        },
        "dob": "1980-01-19",
        "nationality": "British",
        "url": "http://en.wikipedia.org/wiki/Jenson_Button",
        "teams": "Porsche"
      },
      {
        "id": 19,
        "driverRef": "davidson",
        "number": "\\N",
        "code": "DAV",
        "name": { "forename": "Anthony", "surname": "Davidson" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Anthony_Davidson_Goodwood_Festival_of_Speed_2019_%2848242774922%29.jpg/800px-Anthony_Davidson_Goodwood_Festival_of_Speed_2019_%2848242774922%29.jpg",
          "imageby": "By Jen_ross83 - https://www.flickr.com/photos/69527563@N05/48242774922/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=80386032"
        },
        "dob": "1979-04-18",
        "nationality": "British",
        "url": "http://en.wikipedia.org/wiki/Anthony_Davidson",
        "teams": "Minardi, BAR, Super Aguri"
      },
      {
        "id": 20,
        "driverRef": "vettel",
        "number": 5,
        "code": "VET",
        "name": { "forename": "Sebastian", "surname": "Vettel" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sebastian_Vettel_2015_Malaysia_podium_1.jpg/330px-Sebastian_Vettel_2015_Malaysia_podium_1.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=39371108"
        },
        "dob": "1987-07-03",
        "nationality": "German",
        "url": "http://en.wikipedia.org/wiki/Sebastian_Vettel",
        "teams": "BMW Sauber, Toro Rosso, Red Bull, Ferrari, Aston Martin"
      },
      {
        "id": 21,
        "driverRef": "fisichella",
        "number": "\\N",
        "code": "FIS",
        "name": { "forename": "Giancarlo", "surname": "Fisichella" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Giancarlo_Fisichella_2012_WEC_Fuji.jpg/330px-Giancarlo_Fisichella_2012_WEC_Fuji.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=22170040"
        },
        "dob": "1973-01-14",
        "nationality": "Italian",
        "url": "http://en.wikipedia.org/wiki/Giancarlo_Fisichella",
        "teams": "Minardi, Jordan, Benetton, Sauber, Renault, Force India, Ferrari"
      },
      {
        "id": 22,
        "driverRef": "barrichello",
        "number": "\\N",
        "code": "BAR",
        "name": { "forename": "Rubens", "surname": "Barrichello" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/2/28/Rubens_Barrichello_2010_Malaysia.jpg",
          "imageby": "By bert en ernie - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=9944223"
        },
        "dob": "1972-05-23",
        "nationality": "Brazilian",
        "url": "http://en.wikipedia.org/wiki/Rubens_Barrichello",
        "teams": "Jordan, Stewart, Ferrari, Honda, Brawn, Williams"
      },
      {
        "id": 23,
        "driverRef": "ralf_schumacher",
        "number": "\\N",
        "code": "SCH",
        "name": { "forename": "Ralf", "surname": "Schumacher" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ralf_Schumacher%2C_2016.png/800px-Ralf_Schumacher%2C_2016.png",
          "imageby": "By 9EkieraM1 - File:Ralf_Schuhmacher.jpg, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=89214206"
        },
        "dob": "1975-06-30",
        "nationality": "German",
        "url": "http://en.wikipedia.org/wiki/Ralf_Schumacher",
        "teams": "Jordan, Williams, Toyota"
      },
      {
        "id": 24,
        "driverRef": "liuzzi",
        "number": "\\N",
        "code": "LIU",
        "name": { "forename": "Vitantonio", "surname": "Liuzzi" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/0/01/Vitantonio_Liuzzi_2011_Malaysia.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=14877027"
        },
        "dob": "1980-08-06",
        "nationality": "Italian",
        "url": "http://en.wikipedia.org/wiki/Vitantonio_Liuzzi",
        "teams": "McLaren,Benetton, Williams, Joest Racing, Peugeot"
      },
      {
        "id": 25,
        "driverRef": "wurz",
        "number": "\\N",
        "code": "WUR",
        "name": { "forename": "Alexander", "surname": "Wurz" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Alexander_Wurz_-_2016_24_Hours_of_Le_Mans_-_Pit_Walk.jpg/368px-Alexander_Wurz_-_2016_24_Hours_of_Le_Mans_-_Pit_Walk.jpg",
          "imageby": "De David Merrett - Flickr: Alexander Wurz two-time winner of Le Mans 24 Hours (1996 and 2009), CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=54692681"
        },
        "dob": "1974-02-15",
        "nationality": "Austrian",
        "url": "http://en.wikipedia.org/wiki/Alexander_Wurz",
        "teams": "Benetton,McLaren,Williams"
      },
      {
        "id": 26,
        "driverRef": "speed",
        "number": "\\N",
        "code": "SPE",
        "name": { "forename": "Scott", "surname": "Speed" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Red_Bull_Global_Rallycross_2016_160630-M-NZ408-020.jpg/1280px-Red_Bull_Global_Rallycross_2016_160630-M-NZ408-020.jpg",
          "imageby": "By Lance Cpl. Austin Livingston - https://www.dvidshub.net/image/2704214/red-bull-global-rallycross-2016, Public Domain, https://commons.wikimedia.org/w/index.php?curid=58081666"
        },
        "dob": "1983-01-24",
        "nationality": "American",
        "url": "http://en.wikipedia.org/wiki/Scott_Speed",
        "teams": "Toro Rosso"
      },
      {
        "id": 27,
        "driverRef": "albers",
        "number": "\\N",
        "code": "ALB",
        "name": { "forename": "Christijan", "surname": "Albers" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/0/04/Christijan_Albers_2006_%28cropped%29.JPG",
          "imageby": "By I, SilverArrows, CC BY 2.5, https://commons.wikimedia.org/w/index.php?curid=21988866"
        },
        "dob": "1979-04-16",
        "nationality": "Dutch",
        "url": "http://en.wikipedia.org/wiki/Christijan_Albers",
        "teams": "Minardi,Midland,Spyker"
      },
      {
        "id": 28,
        "driverRef": "markus_winkelhock",
        "number": "\\N",
        "code": "WIN",
        "name": { "forename": "Markus", "surname": "Winkelhock" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Markus_winkelhock_brandshatch2014.JPG/800px-Markus_winkelhock_brandshatch2014.JPG",
          "imageby": "By Robk23oxf - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=33181105"
        },
        "dob": "1980-06-13",
        "nationality": "German",
        "url": "http://en.wikipedia.org/wiki/Markus_Winkelhock",
        "teams": "Spyker"
      },
      {
        "id": 29,
        "driverRef": "yamamoto",
        "number": "\\N",
        "code": "YAM",
        "name": { "forename": "Sakon", "surname": "Yamamoto" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/9/98/Sakon_Yamamoto_2010_Motorsport_Japan.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=11669359"
        },
        "dob": "1982-07-09",
        "nationality": "Japanese",
        "url": "http://en.wikipedia.org/wiki/Sakon_Yamamoto",
        "teams": "Super Aguri,Spyker,Hispania"
      },
      {
        "id": 30,
        "driverRef": "michael_schumacher",
        "number": "\\N",
        "code": "MSC",
        "name": { "forename": "Michael", "surname": "Schumacher" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/A%C3%A9cio_Neves%2C_Michael_Schumacher_e_Didi_%28Cropped%29.jpg/800px-A%C3%A9cio_Neves%2C_Michael_Schumacher_e_Didi_%28Cropped%29.jpg",
          "imageby": "By Aécio Neves – Wellington Pedro/Imprensa MG, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=88899356"
        },
        "dob": "1969-01-03",
        "nationality": "German",
        "url": "http://en.wikipedia.org/wiki/Michael_Schumacher",
        "teams": "Jordan, Benetton, Ferrari, Mercedes"
      },
      {
        "id": 31,
        "driverRef": "montoya",
        "number": "\\N",
        "code": "MON",
        "name": { "forename": "Juan", "surname": "Pablo Montoya" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Juan_Pablo_Montoya_at_2021_Indianapolis_500_%2851222252077%29_%28cropped%29.jpg/800px-Juan_Pablo_Montoya_at_2021_Indianapolis_500_%2851222252077%29_%28cropped%29.jpg",
          "imageby": "By Zach Catanzareti Photo - juan pablo montoya, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=106446865"
        },
        "dob": "1975-09-20",
        "nationality": "Colombian",
        "url": "http://en.wikipedia.org/wiki/Juan_Pablo_Montoya",
        "teams": "Williams, McLaren"
      },
      {
        "id": 32,
        "driverRef": "klien",
        "number": "\\N",
        "code": "KLI",
        "name": { "forename": "Christian", "surname": "Klien" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Christian_Klien_%2813994163352%29.jpg/800px-Christian_Klien_%2813994163352%29.jpg",
          "imageby": "De David Merrett from Daventry, England - Christian Klien, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=49569176"
        },
        "dob": "1983-02-07",
        "nationality": "Austrian",
        "url": "http://en.wikipedia.org/wiki/Christian_Klien",
        "teams": "Jaguar,Red Bull,HRT"
      },
      {
        "id": 33,
        "driverRef": "monteiro",
        "number": "\\N",
        "code": "TMO",
        "name": { "forename": "Tiago", "surname": "Monteiro" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Tiago_monteiro_spafrancorchamps2014.JPG/368px-Tiago_monteiro_spafrancorchamps2014.JPG",
          "imageby": "De Robk23oxf - Trabajo propio, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=33576738"
        },
        "dob": "1976-07-24",
        "nationality": "Portuguese",
        "url": "http://en.wikipedia.org/wiki/Tiago_Monteiro",
        "teams": "Jordan,Midland"
      },
      {
        "id": 34,
        "driverRef": "ide",
        "number": "\\N",
        "code": "IDE",
        "name": { "forename": "Yuji", "surname": "Ide" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/9/90/Yuji_Ide_2010_Super_GT_Fuji_400km.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=10225072"
        },
        "dob": "1975-01-21",
        "nationality": "Japanese",
        "url": "http://en.wikipedia.org/wiki/Yuji_Ide",
        "teams": "Super Aguri"
      },
      {
        "id": 35,
        "driverRef": "villeneuve",
        "number": "\\N",
        "code": "VIL",
        "name": { "forename": "Jacques", "surname": "Villeneuve" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Jacques_Villeneuve_at_Mont-Tremblant_2010_01.jpg/800px-Jacques_Villeneuve_at_Mont-Tremblant_2010_01.jpg",
          "imageby": "De Legends Of Motorsports - MT Drivers Sat-9Uploaded by Spyder_Monkey, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=15806884"
        },
        "dob": "1971-04-09",
        "nationality": "Canadian",
        "url": "http://en.wikipedia.org/wiki/Jacques_Villeneuve",
        "teams": "Williams,BAR,Renault,Sauber,BMW Sauber"
      },
      {
        "id": 36,
        "driverRef": "montagny",
        "number": "\\N",
        "code": "FMO",
        "name": { "forename": "Franck", "surname": "Montagny" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Franck_Montagny_Le_Mans_drivers_parade_2011_crop.jpg",
          "imageby": "By David Merrett from Daventry, England - Crop of Franck Montagny and Nicolas Minassian Drivers of Peugeot Sport Total&#039;s Peugeot 908, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=18092396"
        },
        "dob": "1978-01-05",
        "nationality": "French",
        "url": "http://en.wikipedia.org/wiki/Franck_Montagny",
        "teams": "Courage Compétition,DAMS,Team Oreca, Pescarolo Sport,Peugeot Total"
      },
      {
        "id": 37,
        "driverRef": "rosa",
        "number": "\\N",
        "code": "DLR",
        "name": { "forename": "Pedro", "surname": "de la Rosa" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Pedro_de_la_Rosa_2010_Malaysia.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=9944166"
        },
        "dob": "1971-02-24",
        "nationality": "Spanish",
        "url": "http://en.wikipedia.org/wiki/Pedro_de_la_Rosa",
        "teams": "Arrows,Jaguar,McLaren, Sauber, HRT"
      },
      {
        "id": 38,
        "driverRef": "doornbos",
        "number": "\\N",
        "code": "DOO",
        "name": { "forename": "Robert", "surname": "Doornbos" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/42/Robert_Doornbos_-_Red_Bull_Racing.jpg",
          "imageby": "By Jeroen9711, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1789547"
        },
        "dob": "1981-09-23",
        "nationality": "Dutch",
        "url": "http://en.wikipedia.org/wiki/Robert_Doornbos",
        "teams": "Minardi,Red Bull"
      },
      {
        "id": 39,
        "driverRef": "karthikeyan",
        "number": "\\N",
        "code": "KAR",
        "name": { "forename": "Narain", "surname": "Karthikeyan" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Narain_Karthikeyan_2011_Malaysia2.jpg/800px-Narain_Karthikeyan_2011_Malaysia2.jpg",
          "imageby": "By Narain_Karthikeyan_2011_Malaysia.jpg: Morioderivative work: cobra bubbles (talk) - Narain_Karthikeyan_2011_Malaysia.jpg, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=14921086"
        },
        "dob": "1977-01-14",
        "nationality": "Indian",
        "url": "http://en.wikipedia.org/wiki/Narain_Karthikeyan",
        "teams": "Jordan,HRT"
      },
      {
        "id": 40,
        "driverRef": "friesacher",
        "number": "\\N",
        "code": "FRI",
        "name": { "forename": "Patrick", "surname": "Friesacher" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Patrick_Friesacher.jpg/800px-Patrick_Friesacher.jpg",
          "imageby": "CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=189705"
        },
        "dob": "1980-09-26",
        "nationality": "Austrian",
        "url": "http://en.wikipedia.org/wiki/Patrick_Friesacher",
        "teams": "Minardi"
      },
      {
        "id": 41,
        "driverRef": "zonta",
        "number": "\\N",
        "code": "ZON",
        "name": { "forename": "Ricardo", "surname": "Zonta" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/9/97/Ricardo_Zonta_2007_Curitiba.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2116754"
        },
        "dob": "1976-03-23",
        "nationality": "Brazilian",
        "url": "http://en.wikipedia.org/wiki/Ricardo_Zonta",
        "teams": "BAR,Jordan,Toyota"
      },
      {
        "id": 42,
        "driverRef": "pizzonia",
        "number": "\\N",
        "code": "PIZ",
        "name": { "forename": "Antônio", "surname": "Pizzonia" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Fale_F1_Monza_2004_13.jpg/800px-Fale_F1_Monza_2004_13.jpg",
          "imageby": "By Fabio Alessandro Locati - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=5489494"
        },
        "dob": "1980-09-11",
        "nationality": "Brazilian",
        "url": "http://en.wikipedia.org/wiki/Ant%C3%B4nio_Pizzonia",
        "teams": "Jaguar,Williams"
      },
      {
        "id": 43,
        "driverRef": "matta",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Cristiano", "surname": "da Matta" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Cdmlb06.jpg",
          "imageby": "CC BY 2.5, https://commons.wikimedia.org/w/index.php?curid=1603487"
        },
        "dob": "1973-09-19",
        "nationality": "Brazilian",
        "url": "http://en.wikipedia.org/wiki/Cristiano_da_Matta",
        "teams": "Toyota"
      },
      {
        "id": 44,
        "driverRef": "panis",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Olivier", "surname": "Panis" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Olivier_Panis.jpg/1280px-Olivier_Panis.jpg",
          "imageby": "By David Merrett from Daventry, England - Olivier Panis, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=7363258"
        },
        "dob": "1966-09-02",
        "nationality": "French",
        "url": "http://en.wikipedia.org/wiki/Olivier_Panis",
        "teams": "Ligier,Prost,BAR,Toyota"
      },
      {
        "id": 45,
        "driverRef": "pantano",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Giorgio", "surname": "Pantano" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Giorgio_pantano_brandshatch2014.JPG/800px-Giorgio_pantano_brandshatch2014.JPG",
          "imageby": "By Robk23oxf - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=33181496"
        },
        "dob": "1979-02-04",
        "nationality": "Italian",
        "url": "http://en.wikipedia.org/wiki/Giorgio_Pantano",
        "teams": "Jordan"
      },
      {
        "id": 46,
        "driverRef": "bruni",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Gianmaria", "surname": "Bruni" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Gianmaria_Bruni_2012_WEC_Fuji.jpg/330px-Gianmaria_Bruni_2012_WEC_Fuji.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=22170047"
        },
        "dob": "1981-05-30",
        "nationality": "Italian",
        "url": "http://en.wikipedia.org/wiki/Gianmaria_Bruni",
        "teams": "Minardi"
      },
      {
        "id": 47,
        "driverRef": "baumgartner",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Zsolt", "surname": "Baumgartner" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Baumgartner_usgp_2004.jpg/1280px-Baumgartner_usgp_2004.jpg",
          "imageby": "By Rick Dikeman - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=24441"
        },
        "dob": "1981-01-01",
        "nationality": "Hungarian",
        "url": "http://en.wikipedia.org/wiki/Zsolt_Baumgartner",
        "teams": "Jordan,Minardi"
      },
      {
        "id": 48,
        "driverRef": "gene",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Marc", "surname": "Gené" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Marc_Gen%C3%A9_Le_Mans_drivers_parade_2011.jpg/1280px-Marc_Gen%C3%A9_Le_Mans_drivers_parade_2011.jpg",
          "imageby": "By David Merrett from Daventry, England - Marc Gene Driver of Peugeot Sport Total&#039;s Peugeot 908Uploaded by Spyder_Monkey, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=18092100"
        },
        "dob": "1974-03-29",
        "nationality": "Spanish",
        "url": "http://en.wikipedia.org/wiki/Marc_Gen%C3%A9",
        "teams": "Minardi, Williams"
      },
      {
        "id": 49,
        "driverRef": "frentzen",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Heinz-Harald", "surname": "Frentzen" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Heinz-Harald_Frentzen_a.jpg",
          "imageby": "By Frent1ah.jpg: The original uploader was Ger1axg at German Wikipedia.derivative work: Canis dirus - This file was derived from: Frent1ah.jpg:, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=20939014"
        },
        "dob": "1967-05-18",
        "nationality": "German",
        "url": "http://en.wikipedia.org/wiki/Heinz-Harald_Frentzen",
        "teams": "Sauber,Williams, Jordan,Prost,Arrows"
      },
      {
        "id": 50,
        "driverRef": "verstappen",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Jos", "surname": "Verstappen" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Jos_Verstappen%2C_2006.jpg/800px-Jos_Verstappen%2C_2006.jpg",
          "imageby": "By Chris Bloom - https://www.flickr.com/photos/bigshock/184195929/in/photolist-2i25ftN-cofdjJ-cgWLc1-HCkKan-QkPaxi-cgWJqN-R14Yu5-Qi1LCA-RoHQyD-Qi1Li7-cjpY2-2i248XT-cgWM9y-hh42Y-cgWLD5-63SnQu-cgWLHY-hhcBQ-cprvr3-XXQQkS-6yNV4B-YmpsuR-4XRMfA-6yNRVM-cEixd-cgWLWL-ZNZoe5-cofevL-hh42T-6yNTse-5NAMQc-5NF54Y-5NAMY2-5NF5AW-5NANkt-5NF6a7-5NF5dU-5NF63C-5NANcD-5NANrn-6ySMZL-cgWLyu-cgWLmC-cgWL8u-cgWLu1-cgWM1U-cgWLfm-cgWLrh-cgWLUo-cgWLNW, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=101346998"
        },
        "dob": "1972-03-04",
        "nationality": "Dutch",
        "url": "http://en.wikipedia.org/wiki/Jos_Verstappen",
        "teams": "Benetton,Simtek,Footwork,Tyrrell,Stewart,Arrows,Minardi"
      },
      {
        "id": 51,
        "driverRef": "wilson",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Justin", "surname": "Wilson" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Justin_Wilson_2013.jpg/800px-Justin_Wilson_2013.jpg",
          "imageby": "By User:Wolkenjaeger - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=81627712"
        },
        "dob": "1978-07-31",
        "nationality": "British",
        "url": "http://en.wikipedia.org/wiki/Justin_Wilson_(racing_driver)",
        "teams": "Minardi, Jaguar"
      },
      {
        "id": 52,
        "driverRef": "firman",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Ralph", "surname": "Firman" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/8/82/Ralph_Firman_2008_Super_GT.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=3990598"
        },
        "dob": "1975-05-20",
        "nationality": "Irish",
        "url": "http://en.wikipedia.org/wiki/Ralph_Firman",
        "teams": "Jordan"
      },
      {
        "id": 53,
        "driverRef": "kiesa",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Nicolas", "surname": "Kiesa" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Nicolas_kiesa_lemans2006.jpg",
          "imageby": "By Sh0dan at the English Wikipedia, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=4857452"
        },
        "dob": "1978-03-03",
        "nationality": "Danish",
        "url": "http://en.wikipedia.org/wiki/Nicolas_Kiesa",
        "teams": "Minardi,Jordan"
      },
      {
        "id": 54,
        "driverRef": "burti",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Luciano", "surname": "Burti" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Luciano_Burti_2006_Curitiba.jpg/800px-Luciano_Burti_2006_Curitiba.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=769768"
        },
        "dob": "1975-03-05",
        "nationality": "Brazilian",
        "url": "http://en.wikipedia.org/wiki/Luciano_Burti",
        "teams": "Jaguar,Prost"
      },
      {
        "id": 55,
        "driverRef": "alesi",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Jean", "surname": "Alesi" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Jean_Alesi%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0047%29.jpg/800px-Jean_Alesi%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0047%29.jpg",
          "imageby": "By Matti Blume - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=77128046"
        },
        "dob": "1964-06-11",
        "nationality": "French",
        "url": "http://en.wikipedia.org/wiki/Jean_Alesi",
        "teams": "Tyrrell,Ferrari,Benetton,Sauber,Prost,Jordan"
      },
      {
        "id": 56,
        "driverRef": "irvine",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Eddie", "surname": "Irvine" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Eddie_Irvine_after_the_1999_Australian_Grand_Prix.jpg",
          "imageby": "By Franmarjos - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=28401053"
        },
        "dob": "1965-11-10",
        "nationality": "British",
        "url": "http://en.wikipedia.org/wiki/Eddie_Irvine",
        "teams": "Jordan,Ferrari, Jaguar"
      },
      {
        "id": 57,
        "driverRef": "hakkinen",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Mika", "surname": "Häkkinen" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/2016209185748_2016-07-27_Champions_for_Charity_-_Sven_-_1D_X_-_0226_-_DV3P4819_mod.jpg/330px-2016209185748_2016-07-27_Champions_for_Charity_-_Sven_-_1D_X_-_0226_-_DV3P4819_mod.jpg",
          "imageby": "By Sven Mandel - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=50418145"
        },
        "dob": "1968-09-28",
        "nationality": "Finnish",
        "url": "http://en.wikipedia.org/wiki/Mika_H%C3%A4kkinen",
        "teams": "Lotus,McLaren"
      },
      {
        "id": 58,
        "driverRef": "marques",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Tarso", "surname": "Marques" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Tarso_Marques_2007_Curitiba.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2116763"
        },
        "dob": "1976-01-19",
        "nationality": "Brazilian",
        "url": "http://en.wikipedia.org/wiki/Tarso_Marques",
        "teams": "Minardi"
      },
      {
        "id": 59,
        "driverRef": "bernoldi",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Enrique", "surname": "Bernoldi" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Enrique_Bernoldi_2007_Curitiba.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2116787"
        },
        "dob": "1978-10-19",
        "nationality": "Brazilian",
        "url": "http://en.wikipedia.org/wiki/Enrique_Bernoldi",
        "teams": "Arrows"
      },
      {
        "id": 60,
        "driverRef": "mazzacane",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Gastón", "surname": "Mazzacane" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/8/80/Mazzacane_en_Minardi_F1_2000.jpg",
          "imageby": "By Anibaln - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=16972455"
        },
        "dob": "1975-05-08",
        "nationality": "Argentine",
        "url": "http://en.wikipedia.org/wiki/Gast%C3%B3n_Mazzacane",
        "teams": "Minardi,Prost"
      },
      {
        "id": 61,
        "driverRef": "enge",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Tomáš", "surname": "Enge" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/2021_Barum_Czech_Rally_Zl%C3%ADn_-_Tom%C3%A1%C5%A1_Enge.jpg/1280px-2021_Barum_Czech_Rally_Zl%C3%ADn_-_Tom%C3%A1%C5%A1_Enge.jpg",
          "imageby": "By Miloslav Rejha - Own work, CC BY 4.0, https://commons.wikimedia.org/w/index.php?curid=110122314"
        },
        "dob": "1976-09-11",
        "nationality": "Czech",
        "url": "http://en.wikipedia.org/wiki/Tom%C3%A1%C5%A1_Enge",
        "teams": "Prost"
      },
      {
        "id": 62,
        "driverRef": "yoong",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Alex", "surname": "Yoong" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/9/9f/AlexYoong_0028.jpg",
          "imageby": "By photo taken by Jeff Ooi. - Sourced from LensaMalaysia, CC BY 2.5, https://commons.wikimedia.org/w/index.php?curid=1410033"
        },
        "dob": "1976-07-20",
        "nationality": "Malaysian",
        "url": "http://en.wikipedia.org/wiki/Alex_Yoong",
        "teams": "Minardi"
      },
      {
        "id": 63,
        "driverRef": "salo",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Mika", "surname": "Salo" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Mika_Salo_Le_Mans_2009_cropped.jpg/330px-Mika_Salo_Le_Mans_2009_cropped.jpg",
          "imageby": "By Emil Kirschner from Le Mans - cropped from DCS_2211, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=7453291"
        },
        "dob": "1966-11-30",
        "nationality": "Finnish",
        "url": "http://en.wikipedia.org/wiki/Mika_Salo",
        "teams": "Lotus,Tyrrell,Arrows,BAR,Ferrari,Sauber,Toyota"
      },
      {
        "id": 64,
        "driverRef": "diniz",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Pedro", "surname": "Diniz" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Fazenda_da_Toca_foto_kiko_ferrite_02295_-_Pedro_Paulo_Diniz.jpg/1280px-Fazenda_da_Toca_foto_kiko_ferrite_02295_-_Pedro_Paulo_Diniz.jpg",
          "imageby": "By Kiko Ferrite - https://www.linkedin.com/in/kiko-ferrite-83050a90/?originalSubdomain=br, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=106461104"
        },
        "dob": "1970-05-22",
        "nationality": "Brazilian",
        "url": "http://en.wikipedia.org/wiki/Pedro_Diniz",
        "teams": "Forti,Ligier,Arrows,Sauber"
      },
      {
        "id": 65,
        "driverRef": "herbert",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Johnny", "surname": "Herbert" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Johnny_Herbert_at_Goodwood_2014_002.jpg/800px-Johnny_Herbert_at_Goodwood_2014_002.jpg",
          "imageby": "By Phil Guest - This file has been extracted from another file, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=49942545"
        },
        "dob": "1964-06-25",
        "nationality": "British",
        "url": "http://en.wikipedia.org/wiki/Johnny_Herbert",
        "teams": "Benetton,Tyrrell,Lotus,Ligier,Sauber,Stewart,Jaguar"
      },
      {
        "id": 66,
        "driverRef": "mcnish",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Allan", "surname": "McNish" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Allan_Mcnish.jpg/330px-Allan_Mcnish.jpg",
          "imageby": "By David Merrett - Allan McNish Driver of Audi Sport Team Joest&#039;s Audi R18 e-tron quattro Hybrid, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=27640433"
        },
        "dob": "1969-12-29",
        "nationality": "British",
        "url": "http://en.wikipedia.org/wiki/Allan_McNish",
        "teams": "Toyota"
      },
      {
        "id": 67,
        "driverRef": "buemi",
        "number": "\\N",
        "code": "BUE",
        "name": { "forename": "Sébastien", "surname": "Buemi" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sebastien_Buemi_-_Red_Bull_Racing_%28cropped%29.jpg/1024px-Sebastien_Buemi_-_Red_Bull_Racing_%28cropped%29.jpg",
          "imageby": "By Red Bull Racing content pool - https://www.redbullracing.com/int-en/drivers/sebastien-buemi-24, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=124385316"
        },
        "dob": "1988-10-31",
        "nationality": "Swiss",
        "url": "http://en.wikipedia.org/wiki/S%C3%A9bastien_Buemi",
        "teams": "Toro Rosso"
      },
      {
        "id": 68,
        "driverRef": "takagi",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Toranosuke", "surname": "Takagi" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Toranosuke_Takagi_2008_Super_GT.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=3990619"
        },
        "dob": "1974-02-12",
        "nationality": "Japanese",
        "url": "http://en.wikipedia.org/wiki/Toranosuke_Takagi",
        "teams": "Tyrrell, Arrows"
      },
      {
        "id": 69,
        "driverRef": "badoer",
        "number": "\\N",
        "code": "BAD",
        "name": { "forename": "Luca", "surname": "Badoer" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Luca_Badoer_2021.jpg/800px-Luca_Badoer_2021.jpg",
          "imageby": "By Antiuser - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=113223767"
        },
        "dob": "1971-01-25",
        "nationality": "Italian",
        "url": "http://en.wikipedia.org/wiki/Luca_Badoer",
        "teams": "Italia, Minardi, Forti , Ferrari"
      },
      {
        "id": 70,
        "driverRef": "zanardi",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Alex", "surname": "Zanardi" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Alex_Zanardi_%28cropped%29.JPG/800px-Alex_Zanardi_%28cropped%29.JPG",
          "imageby": "By Brunhild Media - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=91518952"
        },
        "dob": "1966-10-23",
        "nationality": "Italian",
        "url": "http://en.wikipedia.org/wiki/Alex_Zanardi",
        "teams": "Jordan, Minardi, Lotus, Williams"
      },
      {
        "id": 71,
        "driverRef": "damon_hill",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Damon", "surname": "Hill" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Damon_Hill_May_2012_Cropped.jpg/330px-Damon_Hill_May_2012_Cropped.jpg",
          "imageby": "By Supermac1961 - https://www.flickr.com/photos/72752141@N00/7227928412/"
        },
        "dob": "1960-09-17",
        "nationality": "British",
        "url": "http://en.wikipedia.org/wiki/Damon_Hill",
        "teams": "Brabham, Williams, Arrows , Jordan"
      },
      {
        "id": 72,
        "driverRef": "sarrazin",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Stephane", "surname": "Serrazin" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Stephane_Sarrazin_2007_Mil_Milhas_Brasil.jpg/330px-Stephane_Sarrazin_2007_Mil_Milhas_Brasil.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=3192273"
        },
        "dob": "1975-11-02",
        "nationality": "French",
        "url": "http://en.wikipedia.org/wiki/St%C3%A9phane_Sarrazin",
        "teams": "Minardi"
      },
      {
        "id": 73,
        "driverRef": "rosset",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Ricardo", "surname": "Rosset" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Ricardo_Rosset_at_1997_Australian_Grand_Prix.jpg",
          "imageby": "De pher38 - Ricardo Rosset in the Lola T97/30Uploaded by Sporti, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=23359411"
        },
        "dob": "1968-07-27",
        "nationality": "Brazilian",
        "url": "http://en.wikipedia.org/wiki/Ricardo_Rosset",
        "teams": "Footwork, Lola, Tyrrell"
      },
      {
        "id": 74,
        "driverRef": "tuero",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Esteban", "surname": "Tuero" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Ricardo_Rosset_at_1997_Australian_Grand_Prix.jpg",
          "imageby": "De pher38 - Ricardo Rosset in the Lola T97/30Uploaded by Sporti, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=23359411"
        },
        "dob": "1978-04-22",
        "nationality": "Argentine",
        "url": "http://en.wikipedia.org/wiki/Esteban_Tuero",
        "teams": "Footwork, Lola, Tyrrell"
      },
      {
        "id": 75,
        "driverRef": "nakano",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Shinji", "surname": "Nakano" },
        "image": { "url": "", "imageby": "" },
        "dob": "1971-04-01",
        "nationality": "Japanese",
        "url": "http://en.wikipedia.org/wiki/Shinji_Nakano"
      },
      {
        "id": 76,
        "driverRef": "magnussen",
        "number": "\\N",
        "code": "MAG",
        "name": { "forename": "Jan", "surname": "Magnussen" },
        "image": { "url": "", "imageby": "" },
        "dob": "1973-07-04",
        "nationality": "Danish",
        "url": "http://en.wikipedia.org/wiki/Jan_Magnussen"
      },
      {
        "id": 77,
        "driverRef": "berger",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Gerhard", "surname": "Berger" },
        "image": { "url": "", "imageby": "" },
        "dob": "1959-08-27",
        "nationality": "Austrian",
        "url": "http://en.wikipedia.org/wiki/Gerhard_Berger"
      },
      {
        "id": 78,
        "driverRef": "larini",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Nicola", "surname": "Larini" },
        "image": { "url": "", "imageby": "" },
        "dob": "1964-03-19",
        "nationality": "Italian",
        "url": "http://en.wikipedia.org/wiki/Nicola_Larini"
      },
      {
        "id": 79,
        "driverRef": "katayama",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Ukyo", "surname": "Katayama" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Ukyo_Katayama_2008.jpg",
          "imageby": "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=5022623"
        },
        "dob": "1963-05-29",
        "nationality": "Japanese",
        "url": "http://en.wikipedia.org/wiki/Ukyo_Katayama",
        "teams": "Larrousse, Tyrrell, Minardi",
        "description": "Ukyo Katayama is a Japanese former racing driver and team manager, most notable for competing for six years in Formula One. He participated in 97 Grands Prix, debuting on 1 March 1992. He scored a total of five championship points, all of them for the Tyrrell team in 1994. He also competed in the 1999 24 Hours of Le Mans, finishing 2nd overall and 1st in the GTP class. He currently serves as the team manager for Goodsmile Racing in Super GT's GT300 class."
      },
      {
        "id": 80,
        "driverRef": "sospiri",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Vincenzo", "surname": "Sospiri" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/4d/F1Lola1997.jpg",
          "imageby": "De Mathijs Diepraam - Trabajo propio, Dominio público, https://commons.wikimedia.org/w/index.php?curid=7416781"
        },
        "dob": "1966-10-07",
        "nationality": "Italian",
        "url": "http://en.wikipedia.org/wiki/Vincenzo_Sospiri",
        "teams": "MasterCard Lola",
        "description": "In 1981, at the age of 15, Sospiri started racing in the Italian 100cc karting championship. In a karting career described by Michael Schumacher as 'dominating', Sospiri won several Italian and European karting championships and finished runner-up in several more, eventually winning the 100cc World Karting Championship in 1987. In 1988 Sospiri progressed to Formula Ford, before working through to Formula 3000 in 1991, as teammate to Damon Hill in the Middlebridge Lola T91/50 Cosworth. In an uncompetitive car, he was only capable of 9 points all season, including a second place at the German round of the championship at the Hockenheimring. He stepped back down into the Italian F3 series in 1992, before making a return to Formula 3000 in 1993, driving a Reynard 93D Judd for the Mythos team. He moved to the Super Nova team for 1994 and mounted a challenge for the championship despite not winning any races, eventually finishing fourth. He stayed at Super Nova for 1995 where he won three races and beat his teammate Ricardo Rosset to the F3000 title.Sospiri revealed, in a 2022 YouTube interview with a fan, that his biggest heroes in racing were Ayrton Senna and Dan Gurney, for whom he would later drive."
      },
      {
        "id": 81,
        "driverRef": "morbidelli",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Gianni", "surname": "Morbidelli" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Gianni_morbidelli_spafrancorchamps2014.JPG/800px-Gianni_morbidelli_spafrancorchamps2014.JPG",
          "imageby": "By Robk23oxf - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=33576727"
        },
        "dob": "1968-01-13",
        "nationality": "Italian",
        "url": "http://en.wikipedia.org/wiki/Gianni_Morbidelli",
        "teams": "Italia, Minardi, Ferrari, Footwork, Sauber",
        "description": "Gianni Morbidelli (born 13 January 1968[1]) is an Italian racing driver. He participated in 70 Formula One Grands Prix, debuting on 11 March 1990. He achieved one podium, and scored a total of 8.5 championship points. He currently competes in the TCR International Series."
      },
      {
        "id": 82,
        "driverRef": "fontana",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Norberto", "surname": "Fontana" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Norberto_Fontana_Rally_Dakar_2011.png/1280px-Norberto_Fontana_Rally_Dakar_2011.png",
          "imageby": "By Adriel anv00 - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=50132855"
        },
        "dob": "1975-01-20",
        "nationality": "Argentine",
        "url": "http://en.wikipedia.org/wiki/Norberto_Fontana",
        "teams": "Sauber",
        "description": "Norberto Edgardo Fontana (born 20 January 1975) is an Argentine racing driver. He participated in four Formula One Grands Prix, debuting on 29 June 1997 but scoring no championship points. His opportunity to race came as a result of two separate injuries sustained by regular Sauber driver Gianni Morbidelli during the 1997 season. During the 1997 European Grand Prix, Fontana had gained attention for apparently blocking Jacques Villeneuve to let rival Michael Schumacher pull away from the Canadian. He attempted to enter with the Tyrrell team for 1998 but was dropped in favour for Brazilian Ricardo Rosset and with Minardi for 2000. In between his time in F1, Fontana raced in Formula Nippon. In 2010 he won the Konex Award as one of the five best Racing Drivers of the last decade in Argentina."
      },
      {
        "id": 83,
        "driverRef": "lamy",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Pedro", "surname": "Lamy" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Pedro_Lamy_Le_Mans_drivers_parade_2011_crop.jpg",
          "imageby": "By David Merrett from Daventry, England - Crop of Simon Pagenaud, Pedro Lamy and Sebastien Bourdais Drivers of Team Peugeot Total&#039;s Peugeot 908, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=18092366"
        },
        "dob": "1972-03-20",
        "nationality": "Portuguese",
        "url": "http://en.wikipedia.org/wiki/Pedro_Lamy",
        "teams": "Lotus, Minardi",
        "description": "José Pedro Mourão Lamy Viçoso, OIH, known as Pedro Lamy is a Portuguese professional racing driver currently racing in endurance races teaming up with Mathias Lauda and gentleman driver Paul Dalla Lana. He was the first Portuguese driver to score a point in a Formula One World Championship event, in the 1995 Australian Grand Prix, for Minardi."
      },
      {
        "id": 84,
        "driverRef": "brundle",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Martin", "surname": "Brundle" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/2016_24_Hours_of_Le_Mans_Brundle-9_%2827688615602%29.jpg/285px-2016_24_Hours_of_Le_Mans_Brundle-9_%2827688615602%29.jpg",
          "imageby": "By United Autosports - Brundle-9, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=49593995"
        },
        "dob": "1959-06-01",
        "nationality": "British",
        "url": "http://en.wikipedia.org/wiki/Martin_Brundle",
        "teams": "Tyrrell, Zakspeed, Williams, Brabham, Benetton, Ligier, McLaren , Jordan",
        "description": "Martin John Brundle is a British former racing driver, best known as a Formula One driver and as a commentator for ITV Sport from 1997 to 2008, the BBC from 2009 to 2011, and Sky Sports since 2012. Brundle contested the 1983 British Formula Three Championship, finishing a close second to Ayrton Senna, and the two progressed to Formula One the next year. Brundle was the 1988 World Sportscar Champion with Silk Cut Jaguar, with a record points score; and won the 1988 24 Hours of Daytona, and the 1990 24 Hours of Le Mans for Jaguar Cars."
      },
      {
        "id": 85,
        "driverRef": "montermini",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Andrea", "surname": "Montermini" },
        "dob": "1964-05-30",
        "nationality": "Italian",
        "url": "http://en.wikipedia.org/wiki/Andrea_Montermini",
        "teams": "Simtek, Pacific, Forti",
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Andrea_montermini_brandshatch2014.JPG/330px-Andrea_montermini_brandshatch2014.JPG",
          "imageby": "By Robk23oxf - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=32874194"
        },
        "description": "Montermini raced in Formula 3 in 1989, taking second place in the Monaco GP support race and 4th in the Italian F3 Championship. He then moved up to Formula 3000, racing for three seasons before finally taking second place in the 1992 season, winning three rounds while driving for the Il Barone Rampante team. He participated in 29 Formula One Grands Prix, debuting on 29 May 1994 for Simtek, replacing Roland Ratzenberger, who had been killed during qualifying for the 1994 San Marino Grand Prix. Montermini himself crashed heavily in practice for the 1994 Spanish Grand Prix, breaking his left heel and his right foot. He returned to Formula One the next season, with the Pacific Grand Prix team, and drove for Forti in 1996 alongside countryman Luca Badoer until the team folded. For the 1997 season Montermini was signed as test driver for the MasterCard Lola team, but it folded after one race. He scored no points in his Formula One career. He competed in the American Champ Car series three different seasons: 1993-1994 and 1999. He scored a 4th place at Detroit in his first season, driving for the underfunded Euromotorsport team. In 1999 he drove a few events for Dan Gurney in Gurney's last season of team ownership. When others such as Alex Barron, Gualter Salles and Raul Boesel were replaced, he filled in and scored a best finish of 11th in Vancouver. He raced in the 2001 24 Hours of Daytona, but has primarily raced in the FIA GT Championship, mostly in Ferrari cars. He has taken two class wins and four further class podiums. In 2006 he has occasionally raced alongside Jarek Janis and Sascha Bert in a Saleen ran by the Zakspeed team. In 2007 he won the International GT Open's GTA class, driving a Ferrari 430 for Scuderia Playteam alongside co-champion Michele Maceratesi, the duo becoming overall champions the following season. He won a second overall championship title in 2013."
      },
      {
        "id": 86,
        "driverRef": "lavaggi",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Giovanni", "surname": "Lavaggi" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Lavaggi_LS1_Spa_2009.JPG/330px-Lavaggi_LS1_Spa_2009.JPG",
          "imageby": "By DoomWarrior - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=6755548"
        },
        "dob": "1958-02-18",
        "nationality": "Italian",
        "url": "http://en.wikipedia.org/wiki/Giovanni_Lavaggi",
        "teams": "Pacific, Minardi",
        "description": "Despite Lavaggi being a nobleman by background, he couldn’t count on personal financial resources; therefore he started racing only at the age of 26.[1] Nevertheless, he managed to reach the top class of motorsport, racing in Formula One in ‘95 and ‘96. His first involvement in F1 was in 1992 when, being a mechanical engineer, he was official test driver for the March F1 team. In 1995, he drove for Lotus-Pacific for four races in which he was forced to retire due to gearbox problems. In the second part of 1996 racing season, he joined the Minardi team for six races. His best result was a tenth place at the Hungaroring, which was the second best result of the year for Minardi team."
      },
      {
        "id": 87,
        "driverRef": "blundell",
        "number": "\\N",
        "code": "\\N",
        "name": { "forename": "Mark", "surname": "Blundell" },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Blundell_portrait_2011.jpg/330px-Mark_Blundell_portrait_2011.jpg",
          "imageby": "By United Autosports - https://www.flickr.com/photos/unitedautosports/5340503913/, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=19979912"
        },
        "dob": "1966-04-08",
        "nationality": "British",
        "url": "http://en.wikipedia.org/wiki/Mark_Blundell",
        "teams": "Brabham, Ligier, Tyrrell, McLaren",
        "description": "Mark Blundell is a British racing driver who competed in Formula One for four seasons, sports cars, and CART. He won the 1992 24 Hours of Le Mans. He was a Formula One presenter for the British broadcaster ITV until the end of the 2008 season when the TV broadcasting rights switched to the BBC. Blundell returned to the track in 2019, driving in the Kwik Fit British Touring Car Championship for the Trade Price Cars team."
      },]

      const itemsPerPage = 10;
      const [currentPage, setCurrentPage] = useState(1);
      const [displayedCharacters, setDisplayedCharacters] = useState([]);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
   
      useEffect(() => {
        const charactersToDisplay = characters.slice(startIndex, endIndex);
        setDisplayedCharacters(charactersToDisplay);
      }, [characters, currentPage, startIndex, endIndex]);
    
      const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };
  
   return <div className={style.container}>
      {displayedCharacters.map(char => (
      <Card
         key = {char.id}
         name = {char.name.forename}
         lastName = {char.name.surname}
         teams={char.teams}
         image = {char.image.url}
         id = {char.id}
      />
      ))}
      <div className={style.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= characters.length}
        >
          Next
        </button>
      </div>
    </div>
}