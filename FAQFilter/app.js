angular.module('faqApp', [])
  .controller('FaqController', function() {
    this.faqs = [
      { question: 'How does SheSafe ensure my safety?', answer: 'SheSafe allows users to select their preferred route, providing control over their journey. Additionally, it integrates safety features and real-time monitoring to ensure a secure travel experience.' },
      { question: 'Can I use SheSafe with any transportation service?', answer: 'Yes, SheSafe is designed to be compatible with various transportation providers, offering flexibility and choice to users across different platforms.' },
      { question: 'Is SheSafe available in my area?', answer: 'SheSafe is continually expanding its coverage to new regions. Check the app or website for the latest availability in your area.' },
      { question: 'How do I provide feedback?', answer: 'Users can easily submit feedback or report any issues through the app or website.' },
      { question: 'Is SheSafe easy to use?', answer: 'Absolutely! SheSafe is designed with user-friendliness in mind, featuring intuitive interfaces and straightforward navigation to ensure a hassle-free experience for all users.' }
    ];

    this.searchText = '';
  });
