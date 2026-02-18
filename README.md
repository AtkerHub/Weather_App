# Projekt: aplikacja z prognozą pogody
Wymagania:
- Wykorzystanie otwartego api z prognozą pogody
- Aplikacja powinna prezentować aktualną prognozę pogody dla wybranego miejsca na świecie.

- Informacje o __aktualnej pogodzie__: 
 - temperatura, 
 - wilgotność, 
 - prędkość i kierunek wiatru 
 - ikona symbolizująca warunki atmosferyczne

- Informacje o prognozie na __7 najbliższych dni__: 
 - temperatura max/min, 
 - prędkość wiatru (średnia albo maksymalna), 
 - przeważający kierunek wiatru 
 - ikona symbolizująca warunki atmosferyczne

- Pobieranie danych z API odbywa się w sposób nieblokujący (asynchroniczny)
- Informacje o teraźniejszej pogodnie stanowią osoby komponent podobnie jak każdy dzień w prognozie pogody stanowi osobny komponent ReactJS
- Należy również zwrócić uwagę na aspekt wizualny aplikacji - komponenty powinny być odgraniczone, teksty czytelne, istotne informacje odpowiednio wyeksponowane
- Strona powinna być również responsywna (co najmniej dostosowywać się do szerokości okna)
- Dodatkowa opcja to zmiana koloru / obrazu tła w zależności od dzisiejszej pogody

Zewnętrzne API: Open-Meteo.com | https://open-meteo.com/