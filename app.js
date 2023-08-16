const cards = [
    {
      front: "Retina display",
      back: "Retina display is a term used by Apple to describe displays that have a higher pixel density than traditional displays.",
      flipped: false
    },
    {
      front: "Processor",
      back: "This describes the computer's brain. For example: i3, i4, i5, i6, i7 and i8. Think of it this way, if a computer is i7, it has 7 brains.",
      flipped: false
    },
    
    {
      front: "Turbo Boost",
      back: "When the processor is under heavy load, Turbo Boost will automatically speed up the computer.",
      flipped: false
    },
    {
        front: "SSD storage",
        back: "This refers to how many files can be held on the computer at once. 256GB is good. 512GB is great!",
        flipped: false
      }
  ];
  
  // Display error message if form fields are blank
  
  new Vue({
    el: "#flashcard-app",
    data: {
      cards: cards,
      newFront: "",
      newBack: "",
      error: false
    },
    methods: {
      toggleCard: function(card) {
        card.flipped = !card.flipped;
      },
      addNew: function() {
        if (!this.newFront || this.newBack) {
          this.error = true;
        } else {
          this.cards.push({
            front: this.newFront,
            back: this.newBack,
            flipped: false
          });
          this.newFront = "";
          this.newBack = "";
          this.error = false;
        }
      }
    }
  });
  