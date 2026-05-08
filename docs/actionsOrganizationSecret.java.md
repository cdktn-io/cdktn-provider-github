# `actionsOrganizationSecret` Submodule <a name="`actionsOrganizationSecret` Submodule" id="@cdktn/provider-github.actionsOrganizationSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationSecret <a name="ActionsOrganizationSecret" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret github_actions_organization_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer"></a>

```java
import io.cdktn.providers.github.actions_organization_secret.ActionsOrganizationSecret;

ActionsOrganizationSecret.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .secretName(java.lang.String)
    .visibility(java.lang.String)
//  .destroyOnDrift(java.lang.Boolean|IResolvable)
//  .encryptedValue(java.lang.String)
//  .id(java.lang.String)
//  .keyId(java.lang.String)
//  .plaintextValue(java.lang.String)
//  .selectedRepositoryIds(java.util.List<java.lang.Number>)
//  .value(java.lang.String)
//  .valueEncrypted(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the secret. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | Configures the access that repositories have to the organization secret. Must be one of 'all', 'private', or 'selected'. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.destroyOnDrift">destroyOnDrift</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#destroy_on_drift ActionsOrganizationSecret#destroy_on_drift}. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.encryptedValue">encryptedValue</a></code> | <code>java.lang.String</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#id ActionsOrganizationSecret#id}. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.keyId">keyId</a></code> | <code>java.lang.String</code> | ID of the public key used to encrypt the secret. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.plaintextValue">plaintextValue</a></code> | <code>java.lang.String</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>java.util.List<java.lang.Number></code> | An array of repository IDs that can access the organization secret. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | Plaintext value to be encrypted. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.valueEncrypted">valueEncrypted</a></code> | <code>java.lang.String</code> | Value encrypted with the GitHub public key, defined by key_id, in Base64 format. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.secretName"></a>

- *Type:* java.lang.String

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#secret_name ActionsOrganizationSecret#secret_name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

Configures the access that repositories have to the organization secret. Must be one of 'all', 'private', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#visibility ActionsOrganizationSecret#visibility}

---

##### `destroyOnDrift`<sup>Optional</sup> <a name="destroyOnDrift" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.destroyOnDrift"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#destroy_on_drift ActionsOrganizationSecret#destroy_on_drift}.

---

##### `encryptedValue`<sup>Optional</sup> <a name="encryptedValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.encryptedValue"></a>

- *Type:* java.lang.String

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#encrypted_value ActionsOrganizationSecret#encrypted_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#id ActionsOrganizationSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.keyId"></a>

- *Type:* java.lang.String

ID of the public key used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#key_id ActionsOrganizationSecret#key_id}

---

##### `plaintextValue`<sup>Optional</sup> <a name="plaintextValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.plaintextValue"></a>

- *Type:* java.lang.String

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#plaintext_value ActionsOrganizationSecret#plaintext_value}

---

##### `selectedRepositoryIds`<sup>Optional</sup> <a name="selectedRepositoryIds" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.selectedRepositoryIds"></a>

- *Type:* java.util.List<java.lang.Number>

An array of repository IDs that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#selected_repository_ids ActionsOrganizationSecret#selected_repository_ids}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.value"></a>

- *Type:* java.lang.String

Plaintext value to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#value ActionsOrganizationSecret#value}

---

##### `valueEncrypted`<sup>Optional</sup> <a name="valueEncrypted" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.valueEncrypted"></a>

- *Type:* java.lang.String

Value encrypted with the GitHub public key, defined by key_id, in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#value_encrypted ActionsOrganizationSecret#value_encrypted}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetDestroyOnDrift">resetDestroyOnDrift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetEncryptedValue">resetEncryptedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetPlaintextValue">resetPlaintextValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetSelectedRepositoryIds">resetSelectedRepositoryIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetValueEncrypted">resetValueEncrypted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDestroyOnDrift` <a name="resetDestroyOnDrift" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetDestroyOnDrift"></a>

```java
public void resetDestroyOnDrift()
```

##### `resetEncryptedValue` <a name="resetEncryptedValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetEncryptedValue"></a>

```java
public void resetEncryptedValue()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetId"></a>

```java
public void resetId()
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetKeyId"></a>

```java
public void resetKeyId()
```

##### `resetPlaintextValue` <a name="resetPlaintextValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetPlaintextValue"></a>

```java
public void resetPlaintextValue()
```

##### `resetSelectedRepositoryIds` <a name="resetSelectedRepositoryIds" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetSelectedRepositoryIds"></a>

```java
public void resetSelectedRepositoryIds()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetValue"></a>

```java
public void resetValue()
```

##### `resetValueEncrypted` <a name="resetValueEncrypted" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetValueEncrypted"></a>

```java
public void resetValueEncrypted()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ActionsOrganizationSecret resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isConstruct"></a>

```java
import io.cdktn.providers.github.actions_organization_secret.ActionsOrganizationSecret;

ActionsOrganizationSecret.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformElement"></a>

```java
import io.cdktn.providers.github.actions_organization_secret.ActionsOrganizationSecret;

ActionsOrganizationSecret.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformResource"></a>

```java
import io.cdktn.providers.github.actions_organization_secret.ActionsOrganizationSecret;

ActionsOrganizationSecret.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.generateConfigForImport"></a>

```java
import io.cdktn.providers.github.actions_organization_secret.ActionsOrganizationSecret;

ActionsOrganizationSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ActionsOrganizationSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ActionsOrganizationSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ActionsOrganizationSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ActionsOrganizationSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ActionsOrganizationSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.remoteUpdatedAt">remoteUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.destroyOnDriftInput">destroyOnDriftInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.encryptedValueInput">encryptedValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.plaintextValueInput">plaintextValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.selectedRepositoryIdsInput">selectedRepositoryIdsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.valueEncryptedInput">valueEncryptedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.destroyOnDrift">destroyOnDrift</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.encryptedValue">encryptedValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.plaintextValue">plaintextValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.valueEncrypted">valueEncrypted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `remoteUpdatedAt`<sup>Required</sup> <a name="remoteUpdatedAt" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.remoteUpdatedAt"></a>

```java
public java.lang.String getRemoteUpdatedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `destroyOnDriftInput`<sup>Optional</sup> <a name="destroyOnDriftInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.destroyOnDriftInput"></a>

```java
public java.lang.Boolean|IResolvable getDestroyOnDriftInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encryptedValueInput`<sup>Optional</sup> <a name="encryptedValueInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.encryptedValueInput"></a>

```java
public java.lang.String getEncryptedValueInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `plaintextValueInput`<sup>Optional</sup> <a name="plaintextValueInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.plaintextValueInput"></a>

```java
public java.lang.String getPlaintextValueInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `selectedRepositoryIdsInput`<sup>Optional</sup> <a name="selectedRepositoryIdsInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.selectedRepositoryIdsInput"></a>

```java
public java.util.List<java.lang.Number> getSelectedRepositoryIdsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `valueEncryptedInput`<sup>Optional</sup> <a name="valueEncryptedInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.valueEncryptedInput"></a>

```java
public java.lang.String getValueEncryptedInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `destroyOnDrift`<sup>Required</sup> <a name="destroyOnDrift" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.destroyOnDrift"></a>

```java
public java.lang.Boolean|IResolvable getDestroyOnDrift();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encryptedValue`<sup>Required</sup> <a name="encryptedValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.encryptedValue"></a>

```java
public java.lang.String getEncryptedValue();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `plaintextValue`<sup>Required</sup> <a name="plaintextValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.plaintextValue"></a>

```java
public java.lang.String getPlaintextValue();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `selectedRepositoryIds`<sup>Required</sup> <a name="selectedRepositoryIds" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.selectedRepositoryIds"></a>

```java
public java.util.List<java.lang.Number> getSelectedRepositoryIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueEncrypted`<sup>Required</sup> <a name="valueEncrypted" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.valueEncrypted"></a>

```java
public java.lang.String getValueEncrypted();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationSecretConfig <a name="ActionsOrganizationSecretConfig" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.github.actions_organization_secret.ActionsOrganizationSecretConfig;

ActionsOrganizationSecretConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .secretName(java.lang.String)
    .visibility(java.lang.String)
//  .destroyOnDrift(java.lang.Boolean|IResolvable)
//  .encryptedValue(java.lang.String)
//  .id(java.lang.String)
//  .keyId(java.lang.String)
//  .plaintextValue(java.lang.String)
//  .selectedRepositoryIds(java.util.List<java.lang.Number>)
//  .value(java.lang.String)
//  .valueEncrypted(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the secret. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | Configures the access that repositories have to the organization secret. Must be one of 'all', 'private', or 'selected'. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.destroyOnDrift">destroyOnDrift</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#destroy_on_drift ActionsOrganizationSecret#destroy_on_drift}. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.encryptedValue">encryptedValue</a></code> | <code>java.lang.String</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#id ActionsOrganizationSecret#id}. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | ID of the public key used to encrypt the secret. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.plaintextValue">plaintextValue</a></code> | <code>java.lang.String</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>java.util.List<java.lang.Number></code> | An array of repository IDs that can access the organization secret. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.value">value</a></code> | <code>java.lang.String</code> | Plaintext value to be encrypted. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.valueEncrypted">valueEncrypted</a></code> | <code>java.lang.String</code> | Value encrypted with the GitHub public key, defined by key_id, in Base64 format. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#secret_name ActionsOrganizationSecret#secret_name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

Configures the access that repositories have to the organization secret. Must be one of 'all', 'private', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#visibility ActionsOrganizationSecret#visibility}

---

##### `destroyOnDrift`<sup>Optional</sup> <a name="destroyOnDrift" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.destroyOnDrift"></a>

```java
public java.lang.Boolean|IResolvable getDestroyOnDrift();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#destroy_on_drift ActionsOrganizationSecret#destroy_on_drift}.

---

##### `encryptedValue`<sup>Optional</sup> <a name="encryptedValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.encryptedValue"></a>

```java
public java.lang.String getEncryptedValue();
```

- *Type:* java.lang.String

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#encrypted_value ActionsOrganizationSecret#encrypted_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#id ActionsOrganizationSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

ID of the public key used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#key_id ActionsOrganizationSecret#key_id}

---

##### `plaintextValue`<sup>Optional</sup> <a name="plaintextValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.plaintextValue"></a>

```java
public java.lang.String getPlaintextValue();
```

- *Type:* java.lang.String

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#plaintext_value ActionsOrganizationSecret#plaintext_value}

---

##### `selectedRepositoryIds`<sup>Optional</sup> <a name="selectedRepositoryIds" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.selectedRepositoryIds"></a>

```java
public java.util.List<java.lang.Number> getSelectedRepositoryIds();
```

- *Type:* java.util.List<java.lang.Number>

An array of repository IDs that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#selected_repository_ids ActionsOrganizationSecret#selected_repository_ids}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Plaintext value to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#value ActionsOrganizationSecret#value}

---

##### `valueEncrypted`<sup>Optional</sup> <a name="valueEncrypted" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.valueEncrypted"></a>

```java
public java.lang.String getValueEncrypted();
```

- *Type:* java.lang.String

Value encrypted with the GitHub public key, defined by key_id, in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#value_encrypted ActionsOrganizationSecret#value_encrypted}

---



