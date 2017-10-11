import React, { Component } from 'preact';
import PropTypes from 'prop-types';

import { StyledIcon } from './styles';

/**
 * This component will render any icon defined in any included in your project, or served from a public Content Delivery Network.
 *
 * @example ./../../docs/components/Icon.md
 */
class Icon extends Component {

	static propTypes = {
		/**
		 * The name of the icon - refer font awesome for list of supported icons
		 */
		name: PropTypes.string.isRequired,

		/**
		 * Custom icon color
		 */
		color: PropTypes.string,

		/**
		 * The size of the Button
		 */
		size: PropTypes.oneOf(['xsmall', 'small', 'normal', 'large', 'xlarge']),

		/**
		 * Gets called when the user clicks on the button
		 *
		 * @param {SyntheticEvent} event The react `SyntheticEvent`
		 */
		onClick: PropTypes.func
	};

	static defaultProps = {
	};

	render() {
		const { name } = this.props;
		return (
			<StyledIcon {...this.props} className={`fa fa-${name}`} aria-hidden="true">
				{}
			</StyledIcon>
		);
	}
}

export default Icon;
