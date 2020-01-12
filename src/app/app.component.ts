import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedFramework = 'no-framwork';
  schema = {
    'type': 'object',
    'title': 'test',
    'required': ['name', 'Description', 'bindable', 'simpleUrl'],
    'properties': {
      'name': {
        'id': 'Name',
        'title': 'Name',
        'type': 'string',
        'pattern': '^[a-zA-Z]+$',
        'description': 'name of the service instance should contain only letters',
        'validationMessages': {
          'pattern': 'Only letters'
        },
        'options': {
          'dependencies': [{
            'id': 'Description',
            'value': 'ok'
          }]
        }
      },
      'Description': {
        'id': 'Description',
        'title': 'Description',
        'type': 'string',
        'maxLength': 20,
        'validationMessages': {
          'pattern': 'max 20 characters'
        }
      },
      'bindable': {
        'id': 'bindable',
        'title': 'bindable',
        'type': 'boolean'
      },
      'simpleUrl': {
        'id': 'simpleUrl',
        'title': 'simpleUrl',
        'type': 'string',
        'pattern': '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?',
        'validationMessages': {
          'pattern': 'URL invalide'
        }
      },
      'email': {
        'id': 'Email',
        'title': 'Email',
        'type': 'string',
        'pattern': '^\\S+@\\S+$',
        'validationMessages': {
          'pattern': 'Invalid Email.'
        }
      },
      'directory': {
        'id': 'directory',
        'title': 'directory',
        'type': 'string',
        'pattern': '^(.+)/([^/]+)$',
        'default': '/var/vcap/store/cassandra',
        'validationMessages': {
          'pattern': 'Invalid directory.'
        }
      },
      'title': {
        'type': 'string',
        'enum': ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj']
      },
      'arr': {
        'type': 'array',
        'items': {
          'type': 'object',
          'required': [],
          'properties': {
            'site': {
              'type': 'string'
            },
            'url': {
              'type': 'boolean'
            }
          }
        }
      }

    }
  };
}
